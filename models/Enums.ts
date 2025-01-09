export enum BasketItemStatus {
    InCart = 'InCart',
    Reserved = 'Reserved',
    OutOfStock = 'OutOfStock',
    Purchased = 'Purchased',
    Added = 'Added'
}

export enum BookStatus {
    Available = 'Available',
    Rented = 'Rented',
    Sold = 'Sold',
    Reserved = 'Reserved'
}
export enum TransactionType{
    Purchase = 2,
    Rental = 1,
    Sale = 0,
}
export enum Category {
    Fiction = 'Fiction',
    NonFiction = 'NonFiction',
    Science = 'Science',
    History = 'History',
    Biography = 'Biography',
    Mystery = 'Mystery',
    Fantasy = 'Fantasy',
    Romance = 'Romance',
    Technology = 'Technology',
    Education = 'Education'
}

export enum Currency {
    EUR = 0,
    USD = 1,
    JPY = 2
}

export enum OrderStatus {
    Pending = 'Pending',
    Completed = 'Completed',
    Cancelled = 'Cancelled',
    Shipped = 'Shipped'
}

export enum PaymentStatus {
    Pending = 'Pending',
    Completed = 'Completed',
    Failed = 'Failed'
}
export enum UserRole {
    Buyer = 'Buyer',
    Seller = 'Seller',
    Admin = 'Admin'
}
export enum UserStatus {
    Logged = "Logged",      
    Pending = "Pending",   
    Suspended = "Suspended",
    Active = "Active",      
    Inactive = "Inactive"  
}