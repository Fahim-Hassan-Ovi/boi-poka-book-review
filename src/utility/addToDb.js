const getStoredReadList = () =>{
// read-List
const storedListStr = localStorage.getItem('read-list');
if (storedListStr){
    const storedList = JSON.parse(storedListStr);
    return storedList;
}
else{
    return [];
}
}
const addStoredReadList = (id) =>{
const storedList = getStoredReadList();
if(storedList.includes(id)){
    // already exists. do not add it
    alert( `${id} Already exists in the read list `);
}
else{
    storedList.push(id);
    const storedListStr = JSON.stringify(storedList);
    localStorage.setItem('read-list', storedListStr);
}
}

const getStoredWishList = () =>{
    const storedWishListStr = localStorage.getItem('wish-list');
    if(storedWishListStr){
        const storedWishList = JSON.parse(storedWishListStr);
        return storedWishList;
    }
    else{
        return [];
    }
}

const addStoredWishList = (id) =>{
    const storedWishList = getStoredWishList();
    if(storedWishList.includes(id)){
        // already exists. do not add it
    alert( `${id} Already exists in the wish list `);
    }
    else{
        storedWishList.push(id);
        const storedWishListStr = JSON.stringify(storedWishList);
        localStorage.setItem('wish-list', storedWishListStr);
    }
}

export {addStoredReadList, addStoredWishList, getStoredReadList, getStoredWishList}
