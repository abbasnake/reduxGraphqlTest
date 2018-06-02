const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
} = require('graphql');


////////////////////////////////////////////// Hardcoded data
let customers = [
    {id:'1', name:'John Doe', email:'jdoe@gmail.com', age:35},
    {id:'2', name:'Steve Smith', email:'steve@gmail.com', age:25},
    {id:'3', name:'Sara Williams', email:'sara@gmail.com', age:32}
];

let general = [
  {index: 1, title: 'have a cookie', id: Math.floor(Math.random() * 10000)},
  {index: 2, title: 'have a bath', id: Math.floor(Math.random() * 10000)},
  {index: 3, title: 'have a laugh', id: Math.floor(Math.random() * 10000)}
];

let sport = [
  {index: 1, title: 'run', id: Math.floor(Math.random() * 10000)},
  {index: 2, title: 'fly', id: Math.floor(Math.random() * 10000)},
  {index: 3, title: 'sleep', id: Math.floor(Math.random() * 10000)}
];

let random = [
  {index: 1, title: 'haadsfasdfkie', id: Math.floor(Math.random() * 10000)},
  {index: 2, title: 'ha21341234th', id: Math.floor(Math.random() * 10000)},
  {index: 3, title: 'hae3e3er4r4gh', id: Math.floor(Math.random() * 10000)}
];

///////////////////////////////////////////////////////// Types
const CustomerType = new GraphQLObjectType({
    name:'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
});

const GeneralType = new GraphQLObjectType({
    name:'General',
    fields:() => ({
        index: {type: GraphQLInt},
        id: {type:GraphQLInt},
        title: {type: GraphQLString}
    })
});
const SportType = new GraphQLObjectType({
    name:'Sport',
    fields:() => ({
        index: {type: GraphQLInt},
        id: {type:GraphQLInt},
        title: {type: GraphQLString}
    })
});
const RandomType = new GraphQLObjectType({
    name:'Random',
    fields:() => ({
        index: {type: GraphQLInt},
        id: {type:GraphQLInt},
        title: {type: GraphQLString}
    })
});

////////////////////////////////////////////////// Root Query
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        general:{
            type: GeneralType,
            args:{
                index: {type:GraphQLInt}
            },
            resolve(parentValue, args){    
                for(let i = 0;i < general.length;i++){
                    if(general[i].index == args.index){
                        return general[i];
                    }
                }
            }
        },
        generalAll: {
            type: new GraphQLList(GeneralType),
            resolve(parentValue, args) {
                return general
            }
        },
        sport:{
            type: SportType,
            args:{
                index: {type:GraphQLInt}
            },
            resolve(parentValue, args){    
                for(let i = 0;i < sport.length;i++){
                    if(sport[i].index == args.index){
                        return sport[i];
                    }
                }
            }
        },
        sportAll: {
            type: new GraphQLList(SportType),
            resolve(parentValue, args) {
                return sport
            }
        },
        random:{
            type: RandomType,
            args:{
                index: {type:GraphQLInt}
            },
            resolve(parentValue, args){    
                for(let i = 0;i < random.length;i++){
                    if(random[i].index == args.index){
                        return random[i];
                    }
                }
            }
        },
        randomAll: {
            type: new GraphQLList(RandomType),
            resolve(parentValue, args) {
                return random
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});