const initialContractState = {
    contracts: [
        {
            client:{
                ceoFullName: "",
                email:"",
                faceType:"",
                fullName:"",
                id:"",
                inn:"",
                phone:"",
            },
            date:"",
            employee:{
                admin: false,
                email:"",
                fullName:"",
                id:"",
                status:"",
                verification:"",
            },
            end: false,
            endDoingDate: "",
            endLifeDate: "",
            id: "",
            number: "",
            priceList:[{
                count: 0,
                id:"",
                name:"",
                price:"",
                sum:""
            }],
            startDate:"",
            subject:"",
            volume:false
        }
    ],
    page: 0,
    count: 0
}

const GET_LIST_OF_CONTRACTS = "GET_LIST_OF_CONTRACTS"

const contractReducer = (state = initialContractState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_LIST_OF_CONTRACTS:
            newState.contracts = action.contracts;
            return newState
        default:
            return newState;
    }
}

export function getListOfContractsActionCreator(contracts) {
    return { type: GET_LIST_OF_CONTRACTS, contracts: contracts }
}

export default contractReducer;