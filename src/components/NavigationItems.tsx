import '../App.css';

interface Props {
    items: any
}

export default function NavigationItems(props:Props) {
    const { items } = props

    return (
        <div className="navbar">
            <a href="/" className="logo">Logo</a>
            <div className="navigations">
                {items.map((i: any, key: any) => (
                <a href={i.toLowerCase()} key={key} className='nav-item'>{i}</a>)
                )}
                <div className="button-primary nav-item">
                    Sign Up
                </div>
            </div>
        </div>
    );
}