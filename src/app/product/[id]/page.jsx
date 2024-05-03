export default function index({params}){
    console.log(params.id);
    return(
        <>
        salam product nomre {params.id}
        </>
    )
}