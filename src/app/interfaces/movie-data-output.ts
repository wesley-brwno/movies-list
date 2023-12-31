import { Data } from "@angular/router";

export interface MovieDataOutput {
    id: number
    title: string;
    imageUrl: string;
    rating: number;
    created_at: any;
    is_deleted?: boolean;
    is_favourite?: boolean;
}
