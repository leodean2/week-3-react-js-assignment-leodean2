     const Button = ({ variant, children }) => {
       const baseStyle = "px-4 py-2 rounded";
       const variantStyle = {
         primary: "bg-blue-500 text-white",
         secondary: "bg-gray-500 text-white",
         danger: "bg-red-500 text-white",
       }[variant];

       return <button className={`${baseStyle} ${variantStyle}`}>{children}</button>;
     };
     
     export default Button;
     