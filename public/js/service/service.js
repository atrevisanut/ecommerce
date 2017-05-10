angular.module('ecommerce').factory('service', function($http){
  return{
    postModel: function(newProduct){
      return $http.post('/api/products', newProduct);
    },
    model: function(){
      return $http.get('/api/products').then(function(response){
        console.log(response.data);
        return response.data;
      });
    }
  };
});
