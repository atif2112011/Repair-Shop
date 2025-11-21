import { getCustomer } from "@/lib/queries/getCustomer";


export default async function CustomerFormPage({
    searchParams
}:{
    searchParams:Promise<{[key:string]:string |undefined}>
}){
    try {
        const {customerId}=await searchParams;
        
        if(customerId){
            //Old Customer
            const customer=await getCustomer(Number(customerId))

            if(!customer)
            {
                return (<>
                <h2 className="text-2xl mb-2">{`Customer with id #${customerId} not found`}</h2></>)
            }

        }
        else
        {
            // New Customer
        }

        
    } catch (error) {
        if(error instanceof Error){
            throw error
        }
    }
}