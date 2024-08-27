import Hero from "../Components/Hero/Hero";

interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = (
    props: HomePageProps
): JSX.Element => {
    return (
        <>
            <Hero />
        </>
    );
};

export default HomePage;
