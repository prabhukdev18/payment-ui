import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

const schema = a.schema({
  Payment: a
    .model({
      amount: a.string(),
      currency: a.string(),
      clientSecret: a.string(),
    })
    .authorization((allow) => [allow.guest()]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'identityPool',
  },
});



// import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

// const schema = a.schema({
//   Todo: a
//     .model({
//       content: a.string(),
//     })
//     .authorization((allow) => [allow.guest()]),
// });

// export type Schema = ClientSchema<typeof schema>;

// export const data = defineData({
//   schema,
//   authorizationModes: {
//     defaultAuthorizationMode: 'identityPool',
//   },
// });

