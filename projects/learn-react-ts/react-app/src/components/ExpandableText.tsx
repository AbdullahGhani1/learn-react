import { useState } from 'react';

interface Props {
   children: string;
   maxChars?: number;
}
const ExpandableText = ({ children, maxChars = 10 }: Props) => {
   const [isExpanded, setIsExpanded] = useState(false);
   if (children.length <= maxChars) return <p>{children}</p>;
   const text = isExpanded ? children : children.substring(0, maxChars);

   return (
      <p>
         {text} ....&nbsp;
         <button
            className="btn btn-dark "
            onClick={() => {
               setIsExpanded(!isExpanded);
            }}
         >
            {isExpanded ? 'Show Less' : 'Read More'}
         </button>
      </p>
   );
};

export default ExpandableText;
