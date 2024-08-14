import Description from "../components/Description";
const main = {
    title: "Title",
    description: "description"
}

function MainPage() {
    return (
        <>
            <Description
            info ={main}/>
        </>
    );
}

export default MainPage;