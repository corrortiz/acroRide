module.exports = {
   Query: {
      allProjects: () => {
         return {kiri: "kiri"};  
      },
      aProject: (_, {id}) => {
        return {kiri: "kiri"};
      }
   },
   Mutation: {
      addProject: (_, {data}) =>{
         return {kiri: "kiri"};  
      },
      deleteProject: (_, {id}) =>{
        return {kiri: "no mames"};
      },
      modifyProject: (_, {data, id}) =>{
        return {nomames: "que pendejada"};
      },
   }
 };