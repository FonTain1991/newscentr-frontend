/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type BreadcrumbKeySpecifier = ('category' | 'post' | BreadcrumbKeySpecifier)[];
export type BreadcrumbFieldPolicy = {
	category?: FieldPolicy<any> | FieldReadFunction<any>,
	post?: FieldPolicy<any> | FieldReadFunction<any>
};
export type FileManagerKeySpecifier = ('id' | 'name' | 'order' | 'parentId' | 'type' | 'value' | FileManagerKeySpecifier)[];
export type FileManagerFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	order?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	type?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type IngredientKeySpecifier = ('children' | 'description' | 'iconId' | 'id' | 'parentId' | 'previewAlt' | 'previewId' | 'previewTitle' | 'title' | IngredientKeySpecifier)[];
export type IngredientFieldPolicy = {
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	iconId?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewAlt?: FieldPolicy<any> | FieldReadFunction<any>,
	previewId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	title?: FieldPolicy<any> | FieldReadFunction<any>
};
export type MutationKeySpecifier = ('createFolder' | 'createIngredient' | 'createPost' | 'createPostCategory' | 'createRecipe' | 'createRecipeCategory' | 'recoveryPassword' | 'registration' | 'removeFile' | 'setNewPassword' | 'signIn' | 'signOut' | 'updateIngredient' | 'updatePost' | 'updatePostCategory' | 'updatePostCountSee' | 'updateRecipe' | 'updateRecipeCategory' | 'updateRecipeCountSee' | 'updateUser' | MutationKeySpecifier)[];
export type MutationFieldPolicy = {
	createFolder?: FieldPolicy<any> | FieldReadFunction<any>,
	createIngredient?: FieldPolicy<any> | FieldReadFunction<any>,
	createPost?: FieldPolicy<any> | FieldReadFunction<any>,
	createPostCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	createRecipe?: FieldPolicy<any> | FieldReadFunction<any>,
	createRecipeCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	recoveryPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	registration?: FieldPolicy<any> | FieldReadFunction<any>,
	removeFile?: FieldPolicy<any> | FieldReadFunction<any>,
	setNewPassword?: FieldPolicy<any> | FieldReadFunction<any>,
	signIn?: FieldPolicy<any> | FieldReadFunction<any>,
	signOut?: FieldPolicy<any> | FieldReadFunction<any>,
	updateIngredient?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePost?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updatePostCountSee?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRecipe?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRecipeCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	updateRecipeCountSee?: FieldPolicy<any> | FieldReadFunction<any>,
	updateUser?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostKeySpecifier = ('countSee' | 'createdAt' | 'description' | 'id' | 'isPublish' | 'keywords' | 'pageName' | 'pageTitle' | 'postCategoryId' | 'previewAlt' | 'previewId' | 'previewTitle' | 'rubric' | 'text' | 'total' | 'updatedAt' | 'url' | PostKeySpecifier)[];
export type PostFieldPolicy = {
	countSee?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublish?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	pageName?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	postCategoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewAlt?: FieldPolicy<any> | FieldReadFunction<any>,
	previewId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	rubric?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type PostCategoryKeySpecifier = ('children' | 'description' | 'id' | 'keywords' | 'name' | 'parentId' | 'text' | 'url' | PostCategoryKeySpecifier)[];
export type PostCategoryFieldPolicy = {
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('checkRecoveryToken' | 'getBreadcrumb' | 'getCountPosts' | 'getCountRecipes' | 'getFileManagerAllParents' | 'getIngredientById' | 'getIngredients' | 'getLatestPosts' | 'getLatestRecipes' | 'getListByParentId' | 'getPostById' | 'getPostByPostCategoryUrl' | 'getPostByUrl' | 'getPostCategories' | 'getPostCategory' | 'getPostCategoryById' | 'getPostCategoryByUrl' | 'getPosts' | 'getRecipeById' | 'getRecipeByUrl' | 'getRecipeCategories' | 'getRecipeCategory' | 'getRecipeCategoryById' | 'getRecipeCategoryByUrl' | 'getRecipes' | 'getRecipesByRecipeCategoryUrl' | 'me' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	checkRecoveryToken?: FieldPolicy<any> | FieldReadFunction<any>,
	getBreadcrumb?: FieldPolicy<any> | FieldReadFunction<any>,
	getCountPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getCountRecipes?: FieldPolicy<any> | FieldReadFunction<any>,
	getFileManagerAllParents?: FieldPolicy<any> | FieldReadFunction<any>,
	getIngredientById?: FieldPolicy<any> | FieldReadFunction<any>,
	getIngredients?: FieldPolicy<any> | FieldReadFunction<any>,
	getLatestPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getLatestRecipes?: FieldPolicy<any> | FieldReadFunction<any>,
	getListByParentId?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostById?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostByPostCategoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostByUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostCategoryById?: FieldPolicy<any> | FieldReadFunction<any>,
	getPostCategoryByUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getPosts?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipeById?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipeByUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipeCategories?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipeCategory?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipeCategoryById?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipeCategoryByUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipes?: FieldPolicy<any> | FieldReadFunction<any>,
	getRecipesByRecipeCategoryUrl?: FieldPolicy<any> | FieldReadFunction<any>,
	me?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecipeKeySpecifier = ('activeCookingTime' | 'countSee' | 'createdAt' | 'description' | 'id' | 'ingredients' | 'isPublish' | 'keywords' | 'pageName' | 'pageTitle' | 'previewAlt' | 'previewId' | 'previewTitle' | 'recipeCategoryId' | 'rubric' | 'text' | 'total' | 'totalCookingTime' | 'updatedAt' | 'url' | RecipeKeySpecifier)[];
export type RecipeFieldPolicy = {
	activeCookingTime?: FieldPolicy<any> | FieldReadFunction<any>,
	countSee?: FieldPolicy<any> | FieldReadFunction<any>,
	createdAt?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredients?: FieldPolicy<any> | FieldReadFunction<any>,
	isPublish?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	pageName?: FieldPolicy<any> | FieldReadFunction<any>,
	pageTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	previewAlt?: FieldPolicy<any> | FieldReadFunction<any>,
	previewId?: FieldPolicy<any> | FieldReadFunction<any>,
	previewTitle?: FieldPolicy<any> | FieldReadFunction<any>,
	recipeCategoryId?: FieldPolicy<any> | FieldReadFunction<any>,
	rubric?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	total?: FieldPolicy<any> | FieldReadFunction<any>,
	totalCookingTime?: FieldPolicy<any> | FieldReadFunction<any>,
	updatedAt?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecipeCategoryKeySpecifier = ('children' | 'description' | 'id' | 'keywords' | 'name' | 'parentId' | 'text' | 'url' | RecipeCategoryKeySpecifier)[];
export type RecipeCategoryFieldPolicy = {
	children?: FieldPolicy<any> | FieldReadFunction<any>,
	description?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	keywords?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	parentId?: FieldPolicy<any> | FieldReadFunction<any>,
	text?: FieldPolicy<any> | FieldReadFunction<any>,
	url?: FieldPolicy<any> | FieldReadFunction<any>
};
export type RecipeIngredientKeySpecifier = ('id' | 'ingredient' | 'ingredientId' | 'note' | 'value' | RecipeIngredientKeySpecifier)[];
export type RecipeIngredientFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredient?: FieldPolicy<any> | FieldReadFunction<any>,
	ingredientId?: FieldPolicy<any> | FieldReadFunction<any>,
	note?: FieldPolicy<any> | FieldReadFunction<any>,
	value?: FieldPolicy<any> | FieldReadFunction<any>
};
export type UserKeySpecifier = ('avatar' | 'email' | 'firstName' | 'id' | 'lastName' | 'login' | 'now' | 'password' | UserKeySpecifier)[];
export type UserFieldPolicy = {
	avatar?: FieldPolicy<any> | FieldReadFunction<any>,
	email?: FieldPolicy<any> | FieldReadFunction<any>,
	firstName?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	lastName?: FieldPolicy<any> | FieldReadFunction<any>,
	login?: FieldPolicy<any> | FieldReadFunction<any>,
	now?: FieldPolicy<any> | FieldReadFunction<any>,
	password?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StrictTypedTypePolicies = {
	Breadcrumb?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | BreadcrumbKeySpecifier | (() => undefined | BreadcrumbKeySpecifier),
		fields?: BreadcrumbFieldPolicy,
	},
	FileManager?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | FileManagerKeySpecifier | (() => undefined | FileManagerKeySpecifier),
		fields?: FileManagerFieldPolicy,
	},
	Ingredient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | IngredientKeySpecifier | (() => undefined | IngredientKeySpecifier),
		fields?: IngredientFieldPolicy,
	},
	Mutation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | MutationKeySpecifier | (() => undefined | MutationKeySpecifier),
		fields?: MutationFieldPolicy,
	},
	Post?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostKeySpecifier | (() => undefined | PostKeySpecifier),
		fields?: PostFieldPolicy,
	},
	PostCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | PostCategoryKeySpecifier | (() => undefined | PostCategoryKeySpecifier),
		fields?: PostCategoryFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Recipe?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecipeKeySpecifier | (() => undefined | RecipeKeySpecifier),
		fields?: RecipeFieldPolicy,
	},
	RecipeCategory?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecipeCategoryKeySpecifier | (() => undefined | RecipeCategoryKeySpecifier),
		fields?: RecipeCategoryFieldPolicy,
	},
	RecipeIngredient?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | RecipeIngredientKeySpecifier | (() => undefined | RecipeIngredientKeySpecifier),
		fields?: RecipeIngredientFieldPolicy,
	},
	User?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | UserKeySpecifier | (() => undefined | UserKeySpecifier),
		fields?: UserFieldPolicy,
	}
};
export type TypedTypePolicies = StrictTypedTypePolicies & TypePolicies;