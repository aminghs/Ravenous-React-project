const apiKey = 'BEguReXl4ylSgfSFyrhgsOa3qREN60TQhZxq4Z1H2--Po0zFUXRiIByRAWWTBZ5_Tr6VGQ9SPyxGgonakRbrVvdz5vr17Bn54s3To-1CSNPPnNXFYqkl84TNqb4OX3Yx'

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}` 
              }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount
                      }
                });
            }
        })
        
    }
};

export default Yelp;