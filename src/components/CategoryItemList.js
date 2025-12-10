const CategoryItemList = ({items}) => {
    return (
        <div>
            {
                items?.map((item) => {
                    return (
                        <div className="flex flex-col">
                            <span className="font-bold">{item?.card?.info?.name}</span>
                            <span>{item?.card?.info?.description}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CategoryItemList;