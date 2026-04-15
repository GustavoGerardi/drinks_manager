'use client'

interface Params {
    params: Promise<{id: number}>
}

export const BeverageDetails = async ({params}: Params) => {
    const {id} = await params;


    const urlRequest = `teste/${id}`;

    const response = fetch(urlRequest);
}

