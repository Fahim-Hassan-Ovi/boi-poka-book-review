import { useLoaderData, useParams } from "react-router-dom"
import { addStoredReadList, addStoredWishList } from "../../utility/addToDb";
import { Helmet } from "react-helmet";

export const BookDetail = () => {

    const { bookId } = useParams();
    const id = parseInt(bookId);
    const data = useLoaderData();
    // console.log(bookId, data);

    const book = data.find(book => book.bookId === id);
    const { bookId: currentBookId, image, rating, yearOfPublishing, publisher, totalPages, review, author, bookName } = book;
    // console.log(book);

    const handleMarkAsRead = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the  
         * readList.
         * 5. if not than add the book to the list
         * 6. if yes than do not add the book
         *  */
        addStoredReadList(id);
    }
    const handleAddToWishlist = (id) => {
        /**
         * 1. understand what to store or save: => bookId
         * 2. Where to store: database
         * 3. array, list, collection: 
         * 4. check: if the book is already in the  
         * readList.
         * 5. if not than add the book to the list
         * 6. if yes than do not add the book
         *  */
        addStoredWishList(id);
    }

    return (
        <div className="flex gap-12">
            <div>
                <img src={image} alt="" />
            </div>
            <div className="flex flex-col
             gap-7">
                <Helmet>
                <meta charSet="utf-8" />
                <title>Book Details | Boi Poka</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
                <h2 >Book Details: {bookId}</h2>
                <h1 className="text-5xl">{bookName}</h1>
                <p>By: {author}</p>
                <p><span className="font-bold">Review</span>{review}</p>
                <p>Number of Pages: <span>{totalPages}</span></p>
                <p>Publisher: <span>{publisher}</span></p>
                <p>Year of Publishing <span>{yearOfPublishing}</span></p>
                <p>Rating : {rating}</p>
                <div>
                    <button onClick={() =>handleMarkAsRead(bookId)} className="btn btn-outline btn-accent mr-8">Mark as Read</button>
                    <button onClick={() => handleAddToWishlist(bookId)} className="btn btn-accent ">Add to WishList</button>
                </div>
            </div>
        </div>
    )
}
