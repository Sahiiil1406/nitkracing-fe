import {createClient} from '@sanity/client'


export const client = createClient({
    projectId: 'mmoq24tu',
    dataset: 'productions',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2021-10-21', // use current date (YYYY-MM-DD) to target the latest API version
    // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})

export default client
