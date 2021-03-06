/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */

import type * as prisma from "./node_modules/.prisma/client/index"
import type { Context } from "./context/index"
import type { core, connectionPluginCore } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    Date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Date";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    Json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Json";
    /**
     * A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.
     */
    PhoneNumber<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "PhoneNumber";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    Time<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Time";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    Upload<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "Upload";
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    UUID<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "UUID";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    Date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Date";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    DateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    Json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Json";
    /**
     * A field whose value conforms to the standard E.164 format as specified in: https://en.wikipedia.org/wiki/E.164. Basically this is +17895551234.
     */
    PhoneNumber<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "PhoneNumber";
    /**
     * A time string at UTC, such as 10:15:30Z, compliant with the `full-time` format outlined in section 5.6 of the RFC 3339profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    Time<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Time";
    /**
     * The `Upload` scalar type represents a file upload.
     */
    Upload<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "Upload";
    /**
     * A field whose value is a generic Universally Unique Identifier: https://en.wikipedia.org/wiki/Universally_unique_identifier.
     */
    UUID<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "UUID";
    /**
     * Adds a Relay-style connection to the type, with numerous options for configuration
     *
     * @see https://nexusjs.org/docs/plugins/connection
     */
    connectionField<FieldName extends string>(
      fieldName: FieldName,
      config: connectionPluginCore.ConnectionFieldConfig<TypeName, FieldName>
    ): void
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AccountOrderBy: { // input type
    provider?: NexusGenEnums['OrderBy'] | null; // OrderBy
    providerAccountId?: NexusGenEnums['OrderBy'] | null; // OrderBy
  }
  EntryOrderBy: { // input type
    createdAt?: NexusGenEnums['OrderBy'] | null; // OrderBy
    title?: NexusGenEnums['OrderBy'] | null; // OrderBy
    updatedAt?: NexusGenEnums['OrderBy'] | null; // OrderBy
  }
  ProfileOrderBy: { // input type
    memberSince?: NexusGenEnums['OrderBy'] | null; // OrderBy
  }
  SessionOrderBy: { // input type
    expires?: NexusGenEnums['OrderBy'] | null; // OrderBy
    userId?: NexusGenEnums['OrderBy'] | null; // OrderBy
  }
}

export interface NexusGenEnums {
  Department: prisma.Department
  OrderBy: "asc" | "desc"
  Role: prisma.Role
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  Date: string
  DateTime: object
  Json: string
  PhoneNumber: string
  Time: string
  UUID: string
  Upload: object
}

export interface NexusGenObjects {
  Account: prisma.Account;
  AccountConnection: { // root type
    edges?: Array<NexusGenRootTypes['AccountEdge'] | null> | null; // [AccountEdge]
    nodes?: Array<NexusGenRootTypes['Account'] | null> | null; // [Account]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AccountEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Account'] | null; // Account
  }
  Entry: prisma.Entry;
  EntryConnection: { // root type
    edges?: Array<NexusGenRootTypes['EntryEdge'] | null> | null; // [EntryEdge]
    nodes?: Array<NexusGenRootTypes['Entry'] | null> | null; // [Entry]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  EntryEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Entry'] | null; // Entry
  }
  Mutation: {};
  PageInfo: { // root type
    endCursor?: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor?: string | null; // String
  }
  Profile: prisma.Profile;
  ProfileConnection: { // root type
    edges?: Array<NexusGenRootTypes['ProfileEdge'] | null> | null; // [ProfileEdge]
    nodes?: Array<NexusGenRootTypes['Profile'] | null> | null; // [Profile]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProfileEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Profile'] | null; // Profile
  }
  Query: {};
  Session: prisma.Session;
  SessionConnection: { // root type
    edges?: Array<NexusGenRootTypes['SessionEdge'] | null> | null; // [SessionEdge]
    nodes?: Array<NexusGenRootTypes['Session'] | null> | null; // [Session]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  SessionEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['Session'] | null; // Session
  }
  User: prisma.User;
  UserConnection: { // root type
    edges?: Array<NexusGenRootTypes['UserEdge'] | null> | null; // [UserEdge]
    nodes?: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['User'] | null; // User
  }
  VerificationToken: prisma.VerificationToken;
  VerificationTokenConnection: { // root type
    edges?: Array<NexusGenRootTypes['VerificationTokenEdge'] | null> | null; // [VerificationTokenEdge]
    nodes?: Array<NexusGenRootTypes['VerificationToken'] | null> | null; // [VerificationToken]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  VerificationTokenEdge: { // root type
    cursor: string; // String!
    node?: NexusGenRootTypes['VerificationToken'] | null; // VerificationToken
  }
  Viewer: { // root type
    id?: string | null; // ID
  }
}

export interface NexusGenInterfaces {
  Node: core.Discriminate<'Account', 'optional'> | core.Discriminate<'Entry', 'optional'> | core.Discriminate<'Profile', 'optional'> | core.Discriminate<'Session', 'optional'> | core.Discriminate<'User', 'optional'> | core.Discriminate<'VerificationToken', 'optional'> | core.Discriminate<'Viewer', 'optional'>;
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Account: { // field return type
    access_token: string | null; // String
    expires_at: number | null; // Int
    id: string | null; // ID
    id_token: string | null; // String
    oauth_token: string | null; // String
    oauth_token_secret: string | null; // String
    provider: string | null; // String
    providerAccountId: string | null; // String
    refresh_token: string | null; // String
    scope: string | null; // String
    session_state: string | null; // String
    token_type: string | null; // String
    type: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
    userId: string | null; // String
  }
  AccountConnection: { // field return type
    edges: Array<NexusGenRootTypes['AccountEdge'] | null> | null; // [AccountEdge]
    nodes: Array<NexusGenRootTypes['Account'] | null> | null; // [Account]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  AccountEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Account'] | null; // Account
  }
  Entry: { // field return type
    author: NexusGenRootTypes['User'] | null; // User
    content: string | null; // String
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    featuredImage: string | null; // String
    id: string | null; // ID
    published: boolean | null; // Boolean
    title: string | null; // String
    updatedAt: NexusGenScalars['DateTime'] | null; // DateTime
    userId: string | null; // String
  }
  EntryConnection: { // field return type
    edges: Array<NexusGenRootTypes['EntryEdge'] | null> | null; // [EntryEdge]
    nodes: Array<NexusGenRootTypes['Entry'] | null> | null; // [Entry]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  EntryEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Entry'] | null; // Entry
  }
  Mutation: { // field return type
    CreateNewUser: NexusGenRootTypes['User'] | null; // User
    DeleteUser: NexusGenRootTypes['User'] | null; // User
    createEntry: NexusGenRootTypes['Entry'] | null; // Entry
    createProfile: NexusGenRootTypes['Profile'] | null; // Profile
  }
  PageInfo: { // field return type
    endCursor: string | null; // String
    hasNextPage: boolean; // Boolean!
    hasPreviousPage: boolean; // Boolean!
    startCursor: string | null; // String
  }
  Profile: { // field return type
    bio: string | null; // String
    coverImage: string | null; // String
    dob: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // ID
    memberSince: NexusGenScalars['DateTime'] | null; // DateTime
    phoneNumber: NexusGenScalars['PhoneNumber'] | null; // PhoneNumber
    user: NexusGenRootTypes['User'] | null; // User
    userId: string | null; // String
  }
  ProfileConnection: { // field return type
    edges: Array<NexusGenRootTypes['ProfileEdge'] | null> | null; // [ProfileEdge]
    nodes: Array<NexusGenRootTypes['Profile'] | null> | null; // [Profile]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  ProfileEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Profile'] | null; // Profile
  }
  Query: { // field return type
    ActiveFilter: NexusGenRootTypes['AccountConnection'] | null; // AccountConnection
    FilterUsers: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    SearchByUserEmail: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    accounts: NexusGenRootTypes['AccountConnection'] | null; // AccountConnection
    allAccounts: NexusGenRootTypes['AccountConnection'] | null; // AccountConnection
    allEntries: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    entryFeed: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    node: NexusGenRootTypes['Node'] | null; // Node
    userEntries: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    usersQuery: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    viewer: NexusGenRootTypes['Viewer'] | null; // Viewer
  }
  Session: { // field return type
    expires: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // ID
    sessionToken: string | null; // String
    user: NexusGenRootTypes['User'] | null; // User
    userId: string | null; // String
  }
  SessionConnection: { // field return type
    edges: Array<NexusGenRootTypes['SessionEdge'] | null> | null; // [SessionEdge]
    nodes: Array<NexusGenRootTypes['Session'] | null> | null; // [Session]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  SessionEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['Session'] | null; // Session
  }
  User: { // field return type
    accounts: NexusGenRootTypes['AccountConnection'] | null; // AccountConnection
    department: NexusGenEnums['Department'] | null; // Department
    email: string | null; // String
    email_verified: NexusGenScalars['DateTime'] | null; // DateTime
    entries: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    id: string | null; // ID
    image: string | null; // String
    name: string | null; // String
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    role: NexusGenEnums['Role'] | null; // Role
    sessions: NexusGenRootTypes['SessionConnection'] | null; // SessionConnection
  }
  UserConnection: { // field return type
    edges: Array<NexusGenRootTypes['UserEdge'] | null> | null; // [UserEdge]
    nodes: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  UserEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['User'] | null; // User
  }
  VerificationToken: { // field return type
    expires: NexusGenScalars['DateTime'] | null; // DateTime
    id: string | null; // ID
    identifier: string | null; // String
    token: string | null; // String
  }
  VerificationTokenConnection: { // field return type
    edges: Array<NexusGenRootTypes['VerificationTokenEdge'] | null> | null; // [VerificationTokenEdge]
    nodes: Array<NexusGenRootTypes['VerificationToken'] | null> | null; // [VerificationToken]
    pageInfo: NexusGenRootTypes['PageInfo']; // PageInfo!
  }
  VerificationTokenEdge: { // field return type
    cursor: string; // String!
    node: NexusGenRootTypes['VerificationToken'] | null; // VerificationToken
  }
  Viewer: { // field return type
    GetAllEntries: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    GetAllSessions: NexusGenRootTypes['SessionConnection'] | null; // SessionConnection
    GetEntry: NexusGenRootTypes['Entry'] | null; // Entry
    GetSession: NexusGenRootTypes['Session'] | null; // Session
    SearchEntriesByTitle: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    allUsers: NexusGenRootTypes['UserConnection'] | null; // UserConnection
    entries: NexusGenRootTypes['EntryConnection'] | null; // EntryConnection
    getUserByAccount: NexusGenRootTypes['AccountConnection'] | null; // AccountConnection
    id: string | null; // ID
    profiles: NexusGenRootTypes['ProfileConnection'] | null; // ProfileConnection
    session: NexusGenRootTypes['SessionConnection'] | null; // SessionConnection
    userAccount: NexusGenRootTypes['AccountConnection'] | null; // AccountConnection
    userByEmail: NexusGenRootTypes['User'] | null; // User
    userById: NexusGenRootTypes['User'] | null; // User
    verificationTokens: NexusGenRootTypes['VerificationTokenConnection'] | null; // VerificationTokenConnection
  }
  Node: { // field return type
    id: string | null; // ID
  }
}

export interface NexusGenFieldTypeNames {
  Account: { // field return type name
    access_token: 'String'
    expires_at: 'Int'
    id: 'ID'
    id_token: 'String'
    oauth_token: 'String'
    oauth_token_secret: 'String'
    provider: 'String'
    providerAccountId: 'String'
    refresh_token: 'String'
    scope: 'String'
    session_state: 'String'
    token_type: 'String'
    type: 'String'
    user: 'User'
    userId: 'String'
  }
  AccountConnection: { // field return type name
    edges: 'AccountEdge'
    nodes: 'Account'
    pageInfo: 'PageInfo'
  }
  AccountEdge: { // field return type name
    cursor: 'String'
    node: 'Account'
  }
  Entry: { // field return type name
    author: 'User'
    content: 'String'
    createdAt: 'DateTime'
    featuredImage: 'String'
    id: 'ID'
    published: 'Boolean'
    title: 'String'
    updatedAt: 'DateTime'
    userId: 'String'
  }
  EntryConnection: { // field return type name
    edges: 'EntryEdge'
    nodes: 'Entry'
    pageInfo: 'PageInfo'
  }
  EntryEdge: { // field return type name
    cursor: 'String'
    node: 'Entry'
  }
  Mutation: { // field return type name
    CreateNewUser: 'User'
    DeleteUser: 'User'
    createEntry: 'Entry'
    createProfile: 'Profile'
  }
  PageInfo: { // field return type name
    endCursor: 'String'
    hasNextPage: 'Boolean'
    hasPreviousPage: 'Boolean'
    startCursor: 'String'
  }
  Profile: { // field return type name
    bio: 'String'
    coverImage: 'String'
    dob: 'DateTime'
    id: 'ID'
    memberSince: 'DateTime'
    phoneNumber: 'PhoneNumber'
    user: 'User'
    userId: 'String'
  }
  ProfileConnection: { // field return type name
    edges: 'ProfileEdge'
    nodes: 'Profile'
    pageInfo: 'PageInfo'
  }
  ProfileEdge: { // field return type name
    cursor: 'String'
    node: 'Profile'
  }
  Query: { // field return type name
    ActiveFilter: 'AccountConnection'
    FilterUsers: 'UserConnection'
    SearchByUserEmail: 'UserConnection'
    accounts: 'AccountConnection'
    allAccounts: 'AccountConnection'
    allEntries: 'EntryConnection'
    entryFeed: 'EntryConnection'
    node: 'Node'
    userEntries: 'EntryConnection'
    usersQuery: 'UserConnection'
    viewer: 'Viewer'
  }
  Session: { // field return type name
    expires: 'DateTime'
    id: 'ID'
    sessionToken: 'String'
    user: 'User'
    userId: 'String'
  }
  SessionConnection: { // field return type name
    edges: 'SessionEdge'
    nodes: 'Session'
    pageInfo: 'PageInfo'
  }
  SessionEdge: { // field return type name
    cursor: 'String'
    node: 'Session'
  }
  User: { // field return type name
    accounts: 'AccountConnection'
    department: 'Department'
    email: 'String'
    email_verified: 'DateTime'
    entries: 'EntryConnection'
    id: 'ID'
    image: 'String'
    name: 'String'
    profile: 'Profile'
    role: 'Role'
    sessions: 'SessionConnection'
  }
  UserConnection: { // field return type name
    edges: 'UserEdge'
    nodes: 'User'
    pageInfo: 'PageInfo'
  }
  UserEdge: { // field return type name
    cursor: 'String'
    node: 'User'
  }
  VerificationToken: { // field return type name
    expires: 'DateTime'
    id: 'ID'
    identifier: 'String'
    token: 'String'
  }
  VerificationTokenConnection: { // field return type name
    edges: 'VerificationTokenEdge'
    nodes: 'VerificationToken'
    pageInfo: 'PageInfo'
  }
  VerificationTokenEdge: { // field return type name
    cursor: 'String'
    node: 'VerificationToken'
  }
  Viewer: { // field return type name
    GetAllEntries: 'EntryConnection'
    GetAllSessions: 'SessionConnection'
    GetEntry: 'Entry'
    GetSession: 'Session'
    SearchEntriesByTitle: 'EntryConnection'
    allUsers: 'UserConnection'
    entries: 'EntryConnection'
    getUserByAccount: 'AccountConnection'
    id: 'ID'
    profiles: 'ProfileConnection'
    session: 'SessionConnection'
    userAccount: 'AccountConnection'
    userByEmail: 'User'
    userById: 'User'
    verificationTokens: 'VerificationTokenConnection'
  }
  Node: { // field return type name
    id: 'ID'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    CreateNewUser: { // args
      department: NexusGenEnums['Department']; // Department!
      email?: string | null; // String
      image?: string | null; // String
      name?: string | null; // String
      role: NexusGenEnums['Role']; // Role!
    }
    DeleteUser: { // args
      id: string; // String!
    }
    createEntry: { // args
      content?: string | null; // String
      featuredImage?: string | null; // String
      publish?: boolean | null; // Boolean
      title?: string | null; // String
      userId?: string | null; // String
    }
    createProfile: { // args
      bio?: string | null; // String
      coverImage?: string | null; // String
      email: string; // String!
      phoneNumber?: string | null; // String
      userId?: string | null; // String
    }
  }
  Profile: {
    dob: { // args
      type?: NexusGenScalars['DateTime'] | null; // DateTime
    }
    memberSince: { // args
      type?: NexusGenScalars['DateTime'] | null; // DateTime
    }
  }
  Query: {
    ActiveFilter: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      id?: string | null; // String
      last?: number | null; // Int
    }
    FilterUsers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      searchString: string; // String!
    }
    SearchByUserEmail: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      search: string; // String!
    }
    accounts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      userId: string; // String!
    }
    allAccounts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      take: number | null; // Int
    }
    allEntries: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      take: number; // Int!
    }
    entryFeed: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      searchString?: string | null; // String
      skip?: number | null; // Int
      take: number | null; // Int
    }
    node: { // args
      id?: string | null; // ID
    }
    userEntries: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      id?: string | null; // String
      last?: number | null; // Int
    }
    usersQuery: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    viewer: { // args
      id: string | null; // ID
    }
  }
  User: {
    accounts: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    department: { // args
      department: NexusGenEnums['Department'] | null; // Department
    }
    entries: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    role: { // args
      role: NexusGenEnums['Role'] | null; // Role
    }
    sessions: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
  Viewer: {
    GetAllEntries: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      searchString: string; // String!
      take?: number | null; // Int
    }
    GetAllSessions: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy: NexusGenInputs['SessionOrderBy']; // SessionOrderBy!
    }
    GetEntry: { // args
      id: string; // String!
    }
    GetSession: { // args
      id: string; // String!
    }
    SearchEntriesByTitle: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
      searchString: string; // String!
    }
    allUsers: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    entries: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    getUserByAccount: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      id: string; // String!
      last?: number | null; // Int
      provider: string; // String!
      providerAccountId: string; // String!
    }
    profiles: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    session: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    userAccount: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
    userByEmail: { // args
      email: string; // String!
    }
    userById: { // args
      id: string; // String!
    }
    verificationTokens: { // args
      after?: string | null; // String
      before?: string | null; // String
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  Node: "Account" | "Entry" | "Profile" | "Session" | "User" | "VerificationToken" | "Viewer"
}

export interface NexusGenTypeInterfaces {
  Account: "Node"
  Entry: "Node"
  Profile: "Node"
  Session: "Node"
  User: "Node"
  VerificationToken: "Node"
  Viewer: "Node"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = "Node";

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    __typename: true
    resolveType: true
    isTypeOf: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}