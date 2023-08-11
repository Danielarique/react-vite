const Layout = ({ children })=>{
        return(
            <div className="flex  items-start flex-col mt-20 pl-10">
                {children}
            </div>
        );
}

export default Layout;