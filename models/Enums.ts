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
    EUR = 'eur',
    USD = 'usd',
    JPY = 'jpy'
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