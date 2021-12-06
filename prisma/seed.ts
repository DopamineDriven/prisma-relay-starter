import prisma from "../context/prisma";
// @ts-ignore
type JsonObject = { [Key in string]?: JsonValue };

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
interface JsonArray extends Array<JsonValue> {}

type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

/**
 * Same as JsonObject, but allows undefined
 */
type InputJsonObject = { [Key in string]?: JsonValue };

interface InputJsonArray extends Array<JsonValue> {}

type InputJsonValue =
  | string
  | number
  | boolean
  | InputJsonObject
  | InputJsonArray;

type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };
type XOR<T, U> = T | U extends object
  ? (Without<T, U> & U) | (Without<U, T> & T)
  : T | U;
type Enumerable<T> = T | Array<T>;

type NewSeed = {
  data: {
    department?: GenEnums["Department"] | null; // Department
    email?: string | null; // String
    email_verified?: Date | null; // DateTime
    id?: string | null; // ID
    image?: string | null; // String
    name?: string | null; // String
    role?: GenEnums["Role"] | null; // Role
    accounts: {
      create: {
        provider: string;
        providerAccountId: string;
        type: string;
        access_token: string;
        token_type: string;
        scope: string;
        id: string;
        id_token: string;
        oauth_token: string;
        oauth_token_secret: string;
        refresh_token: string;
        session_state: string;
        expires_at: number;
      };
    };
    entries: {
      createMany: {
        data: {
          id: string;
          title: string;
          content: string;
          featuredImage: string;
          createdAt: Date;
          updatedAt: Date;
          published: boolean;
        }[];
      };
    };
    sessions: {
      create: {
        expires: Date;
        sessionToken: string;
        id: string;
      };
    };
    profile: {
      create: {
        bio: string;
        coverImage: string;
        dob: Date;
        id: string;
        memberSince: Date;
        phoneNumber: string;
      };
    };
  };
};

type AccountSeed = {
  id: string;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refreshToken: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  sessionState: string | null;
  oauthTokenSecret: string | null;
  oauthToken: string | null;
  createdAt: Date;
  updatedAt: Date;
  role: Role;
  dob: string | null;
  lastActiveIp: string | null;
  lastSeen: Date | null;
  isOnline: boolean;
};
declare const NullableJsonNullValueInput: {
  DbNull: "DbNull";
  JsonNull: "JsonNull";
};
enum Role {
  ADMIN,
  SUPERADMIN,
  USER
}
enum Department {
  "CUSTOMER_SUPPORT",
  "DESIGN",
  "ENGINEERING",
  "EXECUTIVE",
  "FINANCE",
  "HUMAN_RESOURCES",
  "LEGAL",
  "MARKETING",
  "MEDIA",
  "MEDICAL",
  "OPERATIONS",
  "SALES",
  "UNASSIGNED"
}
interface GenEnums {
  Department:
    | "CUSTOMER_SUPPORT"
    | "DESIGN"
    | "ENGINEERING"
    | "EXECUTIVE"
    | "FINANCE"
    | "HUMAN_RESOURCES"
    | "LEGAL"
    | "MARKETING"
    | "MEDIA"
    | "MEDICAL"
    | "OPERATIONS"
    | "SALES"
    | "UNASSIGNED";
  OrderBy: "asc" | "desc";
  Role: "ADMIN" | "SUPERADMIN" | "USER";
}

let department: GenEnums["Department"];
let dataRole: GenEnums["Role"];
interface Account {
  // root type
  access_token?: string | null; // String
  expires_at?: number | null; // Int
  id?: string | null; // ID
  id_token?: string | null; // String
  oauth_token?: string | null; // String
  oauth_token_secret?: string | null; // String
  provider?: string | null; // String
  providerAccountId?: string | null; // String
  refresh_token?: string | null; // String
  scope?: string | null; // String
  session_state?: string | null; // String
  token_type?: string | null; // String
  type?: string | null; // String
  userId?: string | null; // String
}

interface Entry {
  // root type
  content?: string | null; // String
  createdAt?: Date; // DateTime
  featuredImage?: string | null; // String
  id?: string | null; // ID
  published?: boolean | null; // Boolean
  title?: string | null; // String
  updatedAt?: Date | null; // DateTime
  userId?: string | null; // String
}

interface Profile {
  // root type
  bio?: string | null; // String
  coverImage?: string | null; // String
  dob?: Date | null; // DateTime
  id?: string | null; // ID
  memberSince?: Date | null; // DateTime
  phoneNumber?: string | null; // PhoneNumber
  userId?: string | null; // String
}

interface Session {
  // root type
  expires?: Date | null; // DateTime
  id?: string | null; // ID
  sessionToken?: string | null; // String
  userId?: string | null; // String
}

interface User {
  // root type
  department?: GenEnums["Department"] | null; // Department
  email?: string | null; // String
  email_verified?: Date | null; // DateTime
  id?: string | null; // ID
  image?: string | null; // String
  name?: string | null; // String
  role?: GenEnums["Role"] | null; // Role
}

interface VerificationToken {
  // root type
  expires?: Date | null; // DateTime
  id?: string | null; // ID
  identifier?: string | null; // String
  token?: string | null; // String
}

interface ScalarFields {
  String: string;
  Int: number;
  Float: number;
  Boolean: boolean;
  ID: string;
  Date: string;
  DateTime: object;
  Json: string;
  PhoneNumber: string;
  Time: string;
  UUID: string;
  Upload: object;
}

type NullableJsonNullValueInput =
  typeof NullableJsonNullValueInput[keyof typeof NullableJsonNullValueInput];
type EntrySeed = {
  id?: string;
  title: string;
  content?: NullableJsonNullValueInput | InputJsonValue;
  published?: boolean;
};
type AccountWithout = Without<Enumerable<EntrySeed>, AccountSeed>;

type SeedProps = {
  data: Partial<User>;
  select: {
    accounts: {
      where: {
        userId: string;
      };
    };
    entries: {
      where: {
        userId: string;
      };
    };
    sessions: {
      where: {
        userId: string;
      };
    };
  }[];
};

async function userDataFunc() {
  const faker = (await import("faker")).default;
  // const PrismaClient = (await import("@prisma/client")).PrismaClient;
  // const types = await import("../src/server/NexusSchema/nexus");
  // const prisma = new Pimport prisma from '../context/prisma';
  const seedFirstName = faker.name.firstName();
  const seedMiddleInitial = faker.name.middleName().slice(0, 1).toUpperCase();
  const seedSurname = faker.name.lastName();
  const accessToken = faker.datatype.hexaDecimal(166);
  const idToken = faker.datatype.hexaDecimal(1196);
  const exp = faker.date.future(0.0821355, new Date(Date.now()));
  const seedUserId = faker.datatype.uuid();
  //    2022 - (18 * Math.random() + Math.random() * 78) * 0.5
  const month = faker.date.between(1, 12).getMonth().toFixed(0);
  const year = faker.date.between(1940, 2006).getFullYear().toFixed(0);
  const day = new Date(
    Number.parseInt(month, 10).valueOf() === 2
      ? 28 * Math.random() !== 0
        ? Math.ceil(28 * Math.random())
        : 1
      : 30 * Math.random() === 0
      ? 1
      : Math.ceil(30 * Math.random())
  )
    .getDate()
    .toFixed(0);
  const phoneNumber = () => {
    const numberGenerator = Math.floor(Math.random() * 9.99);
    const generate = (num: 0) => {
      const numbers = [...Array(num), numberGenerator];
      numbers;
      return { num };
    };
  };

  function n(min: number, max: number) {
    const { round, random } = Math;
    return round(random() * (max - min) + min);
  }

  const thoseDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .map((value: number, i) => {
      value = n(0, 9);
      return value;
    })
    .join("");
  const standardE164 = `+1${thoseDigits}`.trim();
  console.log("+1".concat(thoseDigits).trim());
  const userData = [
    {
      data: {
        id: seedUserId,
        name: `${seedFirstName} ${seedMiddleInitial}. ${seedSurname}`,
        email: `${seedFirstName.toLowerCase()}.${seedSurname.toLowerCase()}@cortinahealth.com`,
        email_verified: new Date(Date.now()),
        image: faker.image.avatar(),
        role: "USER",
        department: "CUSTOMER_SUPPORT",
        profile: {
          create: {
            bio: faker.lorem.paragraph(1),
            coverImage: faker.image.imageUrl(300, 300, "winter", true, true),
            dob: new Date((Number.parseInt(`${year}-${month}-${day}`), 10)),
            phoneNumber: standardE164
          }
        },
        accounts: {
          create: {
            provider: "google",
            providerAccountId: faker.finance.account(21),
            type: "oauth",
            access_token: accessToken,
            token_type: "Bearer",
            scope:
              "openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email",
            id: faker.datatype.uuid(),
            id_token: idToken,
            oauth_token: faker.datatype.hexaDecimal(36),
            oauth_token_secret: faker.datatype.hexaDecimal(64),
            refresh_token: faker.datatype.hexaDecimal(64),
            session_state: faker.datatype.hexaDecimal(64),
            expires_at: new Date(exp.getTime()).getTime()
          }
        },
        sessions: {
          create: {
            expires: exp,
            sessionToken: faker.datatype.hexaDecimal(166),
            id: faker.datatype.uuid()
          }
        },
        entries: {
          createMany: {
            data: [
              {
                id: faker.datatype.uuid(),
                title: faker.lorem.sentence(20, 30),
                content: faker.lorem.paragraphs(3),
                featuredImage: faker.image.imageUrl(
                  300,
                  300,
                  "winter",
                  true,
                  true
                ),
                createdAt: new Date(Date.now()) as Date,
                updatedAt: new Date(Date.now()) as Date,
                published: faker.datatype.boolean()
              },
              {
                id: faker.datatype.uuid(),
                title: faker.lorem.sentence(20, 30),
                content: faker.lorem.paragraphs(3),
                featuredImage: faker.image.imageUrl(
                  300,
                  300,
                  "winter",
                  true,
                  true
                ),
                createdAt: new Date(Date.now()) as Date,
                updatedAt: new Date(Date.now()) as Date,
                published: faker.datatype.boolean()
              },
              {
                id: faker.datatype.uuid(),
                title: faker.lorem.sentence(20, 30),
                content: faker.lorem.paragraphs(3),
                featuredImage: faker.image.imageUrl(
                  300,
                  300,
                  "winter",
                  true,
                  true
                ),
                createdAt: new Date(Date.now()) as Date,
                updatedAt: new Date(Date.now()) as Date,
                published: faker.datatype.boolean()
              },
              {
                id: faker.datatype.uuid(),
                title: faker.lorem.sentence(20, 30),
                content: faker.lorem.paragraphs(3),
                featuredImage: faker.image.imageUrl(
                  300,
                  300,
                  "winter",
                  true,
                  true
                ),
                createdAt: new Date(Date.now()) as Date,
                updatedAt: new Date(Date.now()) as Date,
                published: faker.datatype.boolean()
              },
              {
                id: faker.datatype.uuid(),
                title: faker.lorem.sentence(20, 30),
                content: faker.lorem.paragraphs(3),
                featuredImage: faker.image.imageUrl(
                  300,
                  300,
                  "winter",
                  true,
                  true
                ),
                createdAt: new Date(Date.now()) as Date,
                updatedAt: new Date(Date.now()) as Date,
                published: faker.datatype.boolean()
              }
            ]
          }
        }
      }
    }
  ];
  console.log(JSON.stringify(userData[0], null, 2));
  return { userData };
}

async function main() {
  try {
    if (prisma) {
      prisma
        .$connect()
        .then(() => console.log("[seeding]: db connection opened"));
      const { userData } = await userDataFunc();
      console.log(`[seeding]: initialized...`);

      for (const u of userData!) {
        const { data: data } = u;
        // @ts-ignore
        const user = await prisma.user.create({ data });
        console.log(`[seeding]: created user with id: ${user.id}`);
      }
      console.log(`[seeding]: success 🎉`);
    }
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await prisma
      .$disconnect()
      .then(() => console.log("[seeding]: db connection closed"));
  }
}

main();

/**
 *         const { ...props } = u;
        let i: number;
        for (i = 0; i <= userData.length - 1; i++) {
          return await prisma.user.create(props);
        }
 */
//
//      function n(): {gen: number} {
//     const { floor, random } = Math;
//     const gen = floor(random() * (9 - 0) + 0);
//     return {gen}
//   }
//   let i =9;
// declare function n(min: number, max: number): number;
// const num = [...n().gen.toString()].map((value, k) => {
//     const xxx = k < i ? value[k++] : ""
//     return xxx
// });

// const welp = (length: 9) =>
//     (function () {
//         for (const v of num) {
//             return v
//         }
//         return [...num.entries()].join("").valueOf()
//     }
//     )()[length]
// console.log(welp.toString())
//
