import React from "react";
import Logo from "@/components/Logo";

const Header: React.FC = () => {
    return (
        <div className={"w-full py-4 flex items-center justify-center"}>
            <Logo size={48}/>
        </div>
    )
}

export default Header;