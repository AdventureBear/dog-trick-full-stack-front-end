import {Category} from "@prisma/client";

export type TrickType = {
    id: number;
    name: string;
    description: string;
    category: Category;
}

export type NewTrickType = {
    name: string
    description: string
    category: Category
}

export type AllCategories = Category | "All"



