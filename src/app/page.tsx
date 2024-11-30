
import Head from 'next/head';
import Counter from './components/Counter';


const Home: React.FC = () => {
    const fullName = "Mohammad Tariq Mahboob";
    const favoriteDish = " Home Made Pizza";
    const favoriteColor = "Torquoise Blue";

    return (
        <div className="container mx-auto p-4">
            <Head>
                <title>Simple Counter App with Props</title>
                <meta name="description" content="A simple counter app with Tailwind CSS in Next.js." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="flex flex-col items-center justify-center min-h-screen">
                <Counter 
                    fullName={fullName} 
                    favoriteDish={favoriteDish} 
                    favoriteColor={favoriteColor} 
                    />
            </main>
        </div>
    );
}

export default Home;
