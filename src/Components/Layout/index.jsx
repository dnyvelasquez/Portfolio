const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center mt-16 layout">
            {children}
        </div>
    )
}

export default Layout;