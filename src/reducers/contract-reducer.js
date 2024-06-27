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
    count: 0,
    info:{
        client: "",
        
    },
    contract:{
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
}

const GET_LIST_OF_CONTRACTS = "GET_LIST_OF_CONTRACTS";
const CREATE_CONTRACT = "CREATE_CONTRACT";
const DELETE = "DELETE";
const CONCRETE = "CONCRETE";
const MAKE_DONE = "MAKE_DONE";

const contractReducer = (state = initialContractState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case GET_LIST_OF_CONTRACTS:
            newState.contracts = action.contracts;
            return newState
        case CREATE_CONTRACT:
            newState.contracts = [...newState.contracts, action.contract];
            return newState;
        case DELETE:
            newState.contracts = newState.contracts.filter(obj => obj.id != action.contract);
        case CONCRETE:
            newState.contract = {...action.data}
            return newState;
        case MAKE_DONE:
            let id = newState.contract.priceList.filter(obj => obj.name===action.payload.name)[0].id;
            newState.contract.priceList = [...newState.contract.priceList.filter(obj => obj.name!==action.payload.name),{...action.payload, id:id}];
            return newState
        default:
            return newState;
    }
}

export function getListOfContractsActionCreator(contracts) {
    return { type: GET_LIST_OF_CONTRACTS, contracts: contracts }
}

export function createContractActionCreator(contract){
    return{type: CREATE_CONTRACT, contract: contract}
}

export function deleteContractActionCreator(contract){
    return{type: DELETE, contract: contract}
}

export function getConcreteContractActionCreator(data){
    return{type: CONCRETE, data: data}
}

export function makeDoneWorkActionCreator(payload){
    return {type: MAKE_DONE, payload:payload}
}

export default contractReducer;