import '../App.css'
import Hero from '../components/hero';
import NavigationItems from '../components/navigationItems.jsx';

export function MainPage() {

    return (
        <>
            <NavigationItems items={['Flights', 'Hotels', 'Packages', 'Sign In']}/>
            <Hero />
        </>
    )
}