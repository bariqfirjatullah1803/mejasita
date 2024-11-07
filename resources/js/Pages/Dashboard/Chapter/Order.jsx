import { SortableList } from '@thaddeusjiang/react-sortable-list';
import { useEffect, useState } from 'react';

const Order = () => {
    const [sortItems, setSortItems] = useState([
        { id: '1', name: 'Item 1' },
        { id: '2', name: 'Item 2' },
        { id: '3', name: 'Item 3' },
    ]);
    useEffect(() => {
        console.log(sortItems);
    }, [sortItems]);
    return (
        <SortableList
            items={sortItems}
            setItems={setSortItems}
            itemRender={({ item }) => (
                <div className="m-8 h-10 w-1/2 bg-blue-400 text-center">
                    {item.name}
                </div>
            )}
        />
    );
};

export default Order;
