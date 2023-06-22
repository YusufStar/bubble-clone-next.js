import classNames from "classnames";

export const Button = ({children, className} : {children: React.ReactNode, className?: string}) => {
    return (
        <button className={
            classNames(
                "bg-[#0d1fa1] hover:bg-[#2600fe] transition-colors duration-300 rounded-md text-[15px] font-bold px-[20px] py-[10px] text-white",
                className
            )
        }>
            {children}
        </button>
    );
};
