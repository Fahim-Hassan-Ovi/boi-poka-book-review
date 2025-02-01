import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredReadList } from '../../utility/addToDb';
import { Book } from '../Book/Book';
import { Helmet } from 'react-helmet';

export const ListedBooks = () => {
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const allBooks = useLoaderData();

    useEffect(() => {
        const storedReadList = getStoredReadList();
        const storedReadListInt = storedReadList.map(id => parseInt(id));

        console.log(storedReadList, storedReadListInt, allBooks);

        const readBookList = allBooks.filter(book => storedReadListInt.includes(book.bookId));
        setReadList(readBookList);

    }, []);

    const handleSort = sortType => {
        setSort(sortType);

        // 
        if (sortType === 'No of Pages') {
            const sortedReadList = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedReadList);
        }
        if (sortType === 'Ratings') {
            const sortedReadList = [...readList].sort((a, b) => a.rating - b.rating);
            setReadList(sortedReadList);
        }
    }

    // ideally we will directly get the data from the database
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Listed Books | Boi Poka</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h2 className='text-3xl my-8'>ListedBooks</h2>

            <div class="dropdown">
                <div tabindex="0" role="button" class="btn m-1">
                    {
                        sort ? `Sort By: ${sort}` : 'Sort By'
                    }
                </div>
                <ul tabindex="0" class="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleSort('Ratings')}><a>Ratings</a></li>
                    <li onClick={() => handleSort('No of Pages')}><a>No of Pages</a></li>
                </ul>
            </div>

            <Tabs>
                <TabList>
                    <Tab>Read List</Tab>
                    <Tab>Wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='text-2xl font-bold'>Books I read: {readList.length}</h2>
                    {
                        readList.map(book => <Book key={book.bookId} book={book}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2 className='text-2xl font-bold'>Books I wished</h2>
                </TabPanel>
            </Tabs>
        </div>
    )
}
