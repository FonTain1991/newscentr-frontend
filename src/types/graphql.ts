/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type AuthRegistration = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  category?: Maybe<PostCategory>;
  post?: Maybe<Post>;
};

export type FileManager = {
  __typename?: 'FileManager';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order: Scalars['Float']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  type: FileManagerType;
  value?: Maybe<Scalars['String']['output']>;
};

export enum FileManagerType {
  Folder = 'FOLDER',
  Image = 'IMAGE'
}

export type FolderCreate = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFolder: FileManager;
  createPost?: Maybe<Post>;
  createPostCategory?: Maybe<PostCategory>;
  recoveryPassword?: Maybe<Scalars['String']['output']>;
  registration: User;
  removeFile?: Maybe<Scalars['String']['output']>;
  setNewPassword?: Maybe<Scalars['String']['output']>;
  signIn: User;
  signOut: User;
  updatePost?: Maybe<Post>;
  updatePostCategory?: Maybe<PostCategory>;
  updatePostCountSee?: Maybe<Post>;
  updateUser?: Maybe<User>;
};


export type MutationCreateFolderArgs = {
  folder: FolderCreate;
};


export type MutationCreatePostArgs = {
  post: PostCreate;
};


export type MutationCreatePostCategoryArgs = {
  category: PostCategoryCreate;
};


export type MutationRecoveryPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationRegistrationArgs = {
  auth: AuthRegistration;
};


export type MutationRemoveFileArgs = {
  id: Scalars['String']['input'];
};


export type MutationSetNewPasswordArgs = {
  password: Scalars['String']['input'];
  password2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdatePostArgs = {
  post: PostUpdate;
};


export type MutationUpdatePostCategoryArgs = {
  category: PostCategoryUpdate;
};


export type MutationUpdatePostCountSeeArgs = {
  url: Scalars['String']['input'];
};


export type MutationUpdateUserArgs = {
  user: UserUpdate;
};

export type Post = {
  __typename?: 'Post';
  countSee: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  isPublish: Scalars['Boolean']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  pageName: Scalars['String']['output'];
  pageTitle: Scalars['String']['output'];
  postCategoryId: Scalars['String']['output'];
  previewAlt?: Maybe<Scalars['String']['output']>;
  previewId?: Maybe<Scalars['String']['output']>;
  previewTitle?: Maybe<Scalars['String']['output']>;
  rubric: PostCategory;
  text: Scalars['String']['output'];
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
};

export type PostCategory = {
  __typename?: 'PostCategory';
  children?: Maybe<Array<PostCategory>>;
  description: Scalars['String']['output'];
  id: Scalars['String']['output'];
  keywords?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};

export type PostCategoryCreate = {
  description: Scalars['String']['input'];
  keywords?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type PostCategoryUpdate = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  keywords?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  url: Scalars['String']['input'];
};

export type PostCreate = {
  description: Scalars['String']['input'];
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  pageName: Scalars['String']['input'];
  pageTitle: Scalars['String']['input'];
  postCategoryId: Scalars['String']['input'];
  previewAlt?: InputMaybe<Scalars['String']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type PostUpdate = {
  description: Scalars['String']['input'];
  id: Scalars['String']['input'];
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['String']['input']>;
  pageName: Scalars['String']['input'];
  pageTitle: Scalars['String']['input'];
  postCategoryId: Scalars['String']['input'];
  previewAlt?: InputMaybe<Scalars['String']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['String']['input']>;
  text: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  checkRecoveryToken?: Maybe<Scalars['String']['output']>;
  getBreadcrumb: Breadcrumb;
  getCountPosts?: Maybe<Post>;
  getFileManagerAllParents?: Maybe<Array<FileManager>>;
  getLatestPosts?: Maybe<Array<Post>>;
  getListByParentId?: Maybe<Array<FileManager>>;
  getPostById?: Maybe<Post>;
  getPostByPostCategoryUrl?: Maybe<Array<Post>>;
  getPostByUrl?: Maybe<Post>;
  getPostCategories: Array<PostCategory>;
  getPostCategory?: Maybe<Array<PostCategory>>;
  getPostCategoryById?: Maybe<PostCategory>;
  getPostCategoryByUrl?: Maybe<PostCategory>;
  getPosts?: Maybe<Array<Post>>;
  getPostsIsPublish?: Maybe<Array<Post>>;
  me?: Maybe<User>;
};


export type QueryCheckRecoveryTokenArgs = {
  token: Scalars['String']['input'];
};


export type QueryGetBreadcrumbArgs = {
  params: Scalars['String']['input'];
};


export type QueryGetFileManagerAllParentsArgs = {
  parentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetLatestPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetListByParentIdArgs = {
  parentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostByPostCategoryUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetPostByUrlArgs = {
  postCategoryUrl: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type QueryGetPostCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostCategoryByUrlArgs = {
  url: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  now: Scalars['DateTime']['output'];
  password: Scalars['String']['output'];
};

export type UserUpdate = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};
