
export default function Custom404() {
    const Error404 = () => {
        return (<>
            <div className="container mx-auto font-semibold p-2">
                <div className="m-3 h-screen  flex justify-center items-center flex-col">
                    <div className="font-bold text-center text-2xl">
                        404<br />指定したページは存在しません。
                    </div>
                </div>
            </div>
        </>)
    }
    return (<>
        <Error404 />
    </>)
}
