import cn from 'classnames';
import { FC } from 'react';

import { ParagraphProps } from './Paragraph.props';

const Paragraph: FC<ParagraphProps> = ({
  variant = 'dark',
  variantFontSize = 'text',
  centered,
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={cn(
        'font-normal',
        {
          ['text-center']: centered,
          ['text-dark']: variant == 'dark',
          ['text-white']: variant == 'white',
          ['font-montserrat text-xl md:!text-3xl text-center md:text-left']: variant == 'hero',
          ['text-base md:text-xl ']: variantFontSize == 'text',
          ['italic text-base md:text-xl']: variantFontSize == 'reviewers',
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default Paragraph;
