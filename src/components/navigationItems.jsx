import '../App.css';

export default function NavigationItems(props) {
    const { items } = props
    console.log('xxx')
    return (
        <div className="navbar">
            <div className="logo">Logo</div>
            <div className="navigations">
                {items.map((i, key) => (<div key={key} className='nav-item'>{i}</div>)
                )}
                <div className="button-primary nav-item">
                    Sign Up
                </div>
            </div>
        </div>
    );
}