export interface Meal {
    id: number;
    type: string;
    time: string;
    foods: FoodItem[];
}

export interface MealCardProps {
    meal: Meal;
}

export class Fats{
    trans: number = 0;//trans
    sat: number = 0;  //saturated
    mono: number = 0; //monounsaturated
    poly: number = 0; //polyunsaturated

    constructor(t: number, s: number, m: number, p:number) {
        this.trans = t;
        this.sat = s;
        this.mono = m;
        this.poly = p;
    }

    total(): number {
        return this.mono + this.trans + this.poly + this.sat;
    }
}

export class Carbohydrates {
    simple: number = 0; // aka sugars
    complex: number = 0; // fiber and starch

    constructor(s: number, c: number) {
        this.simple = s;
        this.complex = c;
    }

    total(): number {
        return this.simple + this.complex;
    }
}

export interface FoodItem {
    id: number;
    type?: string;
    name: string;
    cals: number;
    fats: Fats;
    carbs: Carbohydrates;
    protien: number;
}

export interface FoodItemCardProps {
    ingredients: FoodItem[];
    item: FoodItem;
}