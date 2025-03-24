import Banner from "@/components/banner";
import Welcome from "@/components/welcome";


export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center h-screen'>
            <Banner/>
            <Welcome/>
        </div>
    );
}
