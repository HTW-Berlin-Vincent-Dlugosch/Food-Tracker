/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/": {
    get: {
      responses: {
        /** OK */
        200: unknown;
      };
    };
  };
  "/Food": {
    get: {
      parameters: {
        query: {
          bar_code?: parameters["rowFilter.Food.bar_code"];
          created_at?: parameters["rowFilter.Food.created_at"];
          name?: parameters["rowFilter.Food.name"];
          fat?: parameters["rowFilter.Food.fat"];
          carbohydrates?: parameters["rowFilter.Food.carbohydrates"];
          protein?: parameters["rowFilter.Food.protein"];
          fibre?: parameters["rowFilter.Food.fibre"];
          saturated_fat?: parameters["rowFilter.Food.saturated_fat"];
          salt?: parameters["rowFilter.Food.salt"];
          sugar?: parameters["rowFilter.Food.sugar"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["Food"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** Food */
          Food?: definitions["Food"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          bar_code?: parameters["rowFilter.Food.bar_code"];
          created_at?: parameters["rowFilter.Food.created_at"];
          name?: parameters["rowFilter.Food.name"];
          fat?: parameters["rowFilter.Food.fat"];
          carbohydrates?: parameters["rowFilter.Food.carbohydrates"];
          protein?: parameters["rowFilter.Food.protein"];
          fibre?: parameters["rowFilter.Food.fibre"];
          saturated_fat?: parameters["rowFilter.Food.saturated_fat"];
          salt?: parameters["rowFilter.Food.salt"];
          sugar?: parameters["rowFilter.Food.sugar"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          bar_code?: parameters["rowFilter.Food.bar_code"];
          created_at?: parameters["rowFilter.Food.created_at"];
          name?: parameters["rowFilter.Food.name"];
          fat?: parameters["rowFilter.Food.fat"];
          carbohydrates?: parameters["rowFilter.Food.carbohydrates"];
          protein?: parameters["rowFilter.Food.protein"];
          fibre?: parameters["rowFilter.Food.fibre"];
          saturated_fat?: parameters["rowFilter.Food.saturated_fat"];
          salt?: parameters["rowFilter.Food.salt"];
          sugar?: parameters["rowFilter.Food.sugar"];
        };
        body: {
          /** Food */
          Food?: definitions["Food"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
  "/UserAteFood": {
    get: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.UserAteFood.user_id"];
          food_id?: parameters["rowFilter.UserAteFood.food_id"];
          created_at?: parameters["rowFilter.UserAteFood.created_at"];
          meal_id?: parameters["rowFilter.UserAteFood.meal_id"];
          grams?: parameters["rowFilter.UserAteFood.grams"];
          meal?: parameters["rowFilter.UserAteFood.meal"];
          /** Filtering Columns */
          select?: parameters["select"];
          /** Ordering */
          order?: parameters["order"];
          /** Limiting and Pagination */
          offset?: parameters["offset"];
          /** Limiting and Pagination */
          limit?: parameters["limit"];
        };
        header: {
          /** Limiting and Pagination */
          Range?: parameters["range"];
          /** Limiting and Pagination */
          "Range-Unit"?: parameters["rangeUnit"];
          /** Preference */
          Prefer?: parameters["preferCount"];
        };
      };
      responses: {
        /** OK */
        200: {
          schema: definitions["UserAteFood"][];
        };
        /** Partial Content */
        206: unknown;
      };
    };
    post: {
      parameters: {
        body: {
          /** UserAteFood */
          UserAteFood?: definitions["UserAteFood"];
        };
        query: {
          /** Filtering Columns */
          select?: parameters["select"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** Created */
        201: unknown;
      };
    };
    delete: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.UserAteFood.user_id"];
          food_id?: parameters["rowFilter.UserAteFood.food_id"];
          created_at?: parameters["rowFilter.UserAteFood.created_at"];
          meal_id?: parameters["rowFilter.UserAteFood.meal_id"];
          grams?: parameters["rowFilter.UserAteFood.grams"];
          meal?: parameters["rowFilter.UserAteFood.meal"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
    patch: {
      parameters: {
        query: {
          user_id?: parameters["rowFilter.UserAteFood.user_id"];
          food_id?: parameters["rowFilter.UserAteFood.food_id"];
          created_at?: parameters["rowFilter.UserAteFood.created_at"];
          meal_id?: parameters["rowFilter.UserAteFood.meal_id"];
          grams?: parameters["rowFilter.UserAteFood.grams"];
          meal?: parameters["rowFilter.UserAteFood.meal"];
        };
        body: {
          /** UserAteFood */
          UserAteFood?: definitions["UserAteFood"];
        };
        header: {
          /** Preference */
          Prefer?: parameters["preferReturn"];
        };
      };
      responses: {
        /** No Content */
        204: never;
      };
    };
  };
}

export interface definitions {
  Food: {
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    bar_code: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: character varying
     * @default
     */
    name: string;
    /** Format: real */
    fat: number;
    /** Format: real */
    carbohydrates: number;
    /** Format: real */
    protein: number;
    /** Format: real */
    fibre: number;
    /** Format: real */
    saturated_fat: number;
    /** Format: real */
    salt: number;
    /** Format: real */
    sugar: number;
  };
  UserAteFood: {
    /** Format: uuid */
    user_id: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Foreign Key to `Food.bar_code`.<fk table='Food' column='bar_code'/>
     */
    food_id: number;
    /**
     * Format: timestamp with time zone
     * @default now()
     */
    created_at?: string;
    /**
     * Format: bigint
     * @description Note:
     * This is a Primary Key.<pk/>
     */
    meal_id: number;
    /** Format: smallint */
    grams: number;
    /** Format: character varying */
    meal: string;
  };
}

export interface parameters {
  /**
   * @description Preference
   * @enum {string}
   */
  preferParams: "params=single-object";
  /**
   * @description Preference
   * @enum {string}
   */
  preferReturn: "return=representation" | "return=minimal" | "return=none";
  /**
   * @description Preference
   * @enum {string}
   */
  preferCount: "count=none";
  /** @description Filtering Columns */
  select: string;
  /** @description On Conflict */
  on_conflict: string;
  /** @description Ordering */
  order: string;
  /** @description Limiting and Pagination */
  range: string;
  /**
   * @description Limiting and Pagination
   * @default items
   */
  rangeUnit: string;
  /** @description Limiting and Pagination */
  offset: string;
  /** @description Limiting and Pagination */
  limit: string;
  /** @description Food */
  "body.Food": definitions["Food"];
  /** Format: bigint */
  "rowFilter.Food.bar_code": string;
  /** Format: timestamp with time zone */
  "rowFilter.Food.created_at": string;
  /** Format: character varying */
  "rowFilter.Food.name": string;
  /** Format: real */
  "rowFilter.Food.fat": string;
  /** Format: real */
  "rowFilter.Food.carbohydrates": string;
  /** Format: real */
  "rowFilter.Food.protein": string;
  /** Format: real */
  "rowFilter.Food.fibre": string;
  /** Format: real */
  "rowFilter.Food.saturated_fat": string;
  /** Format: real */
  "rowFilter.Food.salt": string;
  /** Format: real */
  "rowFilter.Food.sugar": string;
  /** @description UserAteFood */
  "body.UserAteFood": definitions["UserAteFood"];
  /** Format: uuid */
  "rowFilter.UserAteFood.user_id": string;
  /** Format: bigint */
  "rowFilter.UserAteFood.food_id": string;
  /** Format: timestamp with time zone */
  "rowFilter.UserAteFood.created_at": string;
  /** Format: bigint */
  "rowFilter.UserAteFood.meal_id": string;
  /** Format: smallint */
  "rowFilter.UserAteFood.grams": string;
  /** Format: character varying */
  "rowFilter.UserAteFood.meal": string;
}

export interface operations {}

export interface external {}
