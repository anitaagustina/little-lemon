import Logo from "../Logo.jpg";

function Header() {
    return <>
    {/*Semantic Meta Tags */}
    <meta name="description" content="Little Lemon is a Chicago-based restaurant that serves authentic Greek food."/>
    <meta name="og:title" content="Little Lemon Website"/>
    <meta name="og:description" content="Little Lemon website for reservation"/>
    <meta name="og:image" content={Logo}/>
    </>
}

export default Header;