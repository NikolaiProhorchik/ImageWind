class View{

	constructor()
	{

	}
	
	authorization(userLogo, userName)
    {
        const template = document.getElementById('UserLogoName-template');
        let user = document.importNode(template.content, true);
        
		user.getElementById('userLogo').setAttribute("src", userLogo);
		user.getElementById('userName').innerText = userName;
        
		document.getElementById('userLogoName').appendChild(user);
        this.ifAuthorized = true;
    }
	
    addPhotoPost(photoPost)
    {
        const template = document.getElementById('container-template');
        let newphotoPost = document.importNode(template.content, true);
		
		newphotoPost.getElementById('authorLogo').setAttribute("src", photoPost.photoLinkAuthor);
        newphotoPost.getElementById('authorName').innerText = photoPost.author;
		newphotoPost.getElementById('date').innerText = photoPost.createdAt.getDate().toString() + "." + (photoPost.createdAt.getMonth() + 1).toString() + "." + photoPost.createdAt.getFullYear().toString() + " " + photoPost.createdAt.getHours().toString() + ":" + photoPost.createdAt.getMinutes().toString();
		let str = "";
        for(let i = 0; i < photoPost.hashTags.length; i++)
        {
            str = str + photoPost.hashTags[i] + " ";
        }
        newphotoPost.getElementById('hash').innerText = str + photoPost.description;
        newphotoPost.getElementById('photo').setAttribute("src", photoPost.photoLink);
        newphotoPost.getElementById('numofLikes').innerText = "0";
        
		document.getElementById('tape').appendChild(newphotoPost);
    }
	
    editPhotoPost(id, photoPost)
    {
        let photoPosts = document.getElementsByClassName('container');
        let photoPostsArray = Array.from(photoPosts);
        const template = document.getElementById('container-template');
		let editedphotoPost = document.importNode(template.content, true);
        
        let str = "";
        for(let i = 0; i < photoPost.hashTags.length; i++)
        {
            str = str + photoPost.hashTags[i] + " ";
        }
        editedphotoPost.getElementById('hash').innerText = str + photoPost.description;
        editedphotoPost.getElementById('photo').setAttribute("src", photoPost.photoLink);
		
		let index = photoPostsArray.findIndex(post => post.id === id);
        
		document.getElementById('tape').replaceChild(editedphotoPost, photoPostsArray[index]);
    }
	
    removePhotoPost(id)
    {
        let photoPosts = document.getElementsByClassName('container');
        let photoPostsArray = Array.from(photoPosts);
		
		let index = photoPostsArray.findIndex(post => post.id === id);
		
        document.getElementById('tape').removeChild(photoPostsArray[index]);
    }
}

class PostCollection {
	
	constructor(photoPosts)
	{
		this._photoPosts = (photoPosts || []);
	}
	
	getPage(skip = 0, top = 10, filterConfig)
    {
		let photoPostsFiltered = this._photoPosts.slice(0, this._photoPosts.length);
		
		if (filterConfig != undefined)
        {
			if (filterConfig.author != undefined)
            {
				photoPostsFiltered = photoPostsFiltered.filter(post => post.author === filterConfig.author);
			}
				
			if (filterConfig.createdAt != undefined)
			{
				photoPostsFiltered = photoPostsFiltered.filter(post => post.createdAt.getTime() === filterConfig.createdAt.getTime());	
			}
				
			if (filterConfig.hashTags != undefined)
			{
				photoPostsFiltered = photoPostsFiltered.filter(post => filterConfig.hashTags.every(hashTag => post.hashTags.includes(hashTag)));	
			}
		}
		
		photoPostsFiltered.sort(function (a, b)
        {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        
        photoPostsFiltered = photoPostsFiltered.slice(skip, skip + top);
		return photoPostsFiltered;
	}
	
	get(id)
    {
        return this._photoPosts.find(post => post.id === id);
    }

	static validate(photoPost)
    {
        if (photoPost === undefined)
        {
			return false;
        }
        
		let TYPESTRING = '[object String]';
        let TYPEDATE = '[object Date]';
        let TYPEOBJECT = '[object Array]';
        let toString = {}.toString;
        
		return 	(TYPESTRING === toString.call(photoPost.id))&&
		(TYPESTRING === toString.call(photoPost.description))&&
        (TYPESTRING === toString.call(photoPost.author))&&
		(TYPEDATE === toString.call(photoPost.createdAt))&&
		(photoPost.createdAt != 'Invalid Date')&&
		(TYPESTRING === toString.call(photoPost.photoLink))&&
		(TYPEOBJECT === toString.call(photoPost.hashTags))&&
		(TYPEOBJECT === toString.call(photoPost.likes))
    }

	add(photoPost)
    {
        if(PostCollection.validate(photoPost))
        {
            this._photoPosts.push(photoPost);
            return true;
        }
		
        return false;
    }
	
	addAll(photoPosts)
	{
		let invalidPosts = [];
		
		for (let i = 0; i < photoPosts._photoPosts.length; i++)
        {
            if (PostCollection.validate(photoPosts._photoPosts[i]))
            {
                this._photoPosts.push(photoPosts._photoPosts[i]);
            }
			else
			{
				invalidPosts.push(photoPosts._photoPosts[i]);
			}
        }
		
		return invalidPosts;
	}
	
	edit(id, photoPost)
    {
		let index = this._photoPosts.findIndex(post => post.id === id);
		
		if(index === -1)
		{
           return false;
		}

		if(photoPost.description != undefined)
		{
			let TYPESTRING = '[object String]';
			let toString = {}.toString;
			
			if (TYPESTRING === toString.call(photoPost.description))
			{
				this._photoPosts[index].description = photoPost.description;
			}
			else
			{
				return false;
			}
		}
      
        if(photoPost.photoLink != undefined)
        {
			let TYPESTRING = '[object String]';
			let toString = {}.toString;
			
			if(TYPESTRING === toString.call(photoPost.photoLink))
			{
				this._photoPosts[index].photoLink = photoPost.photoLink;
			}
			else
			{
				return false;
			}
        }
		
		if(photoPost.hashTags != undefined)
        {
			let TYPEOBJECT = '[object Array]';
			let toString = {}.toString;
			
			if(TYPEOBJECT === toString.call(photoPost.hashTags))
			{
				this._photoPosts[index].hashTags = photoPost.hashTags;
			}
			else
			{
				return false;
			}
        }
		
		return true;
    }

	remove(id)
    {
		let tempId = this._photoPosts.findIndex(post => post.id === id);
        
		if(tempId === -1)
		{
           return false;
        }
		
		this._photoPosts.splice(tempId, 1);
        return true;
    }
}

(function() {
    function photoposts()
    {
        return 1;
    }
	
    function addPhotoPost(photoPost)
    {
        oFC = new PostCollection();
        oV = new View();
        
		if(oFC.add(photoPost))
        {
            oV.addPhotoPost(photoPost);
            return true;
        }
		
        return false;
    }
	
    function editPhotoPost(id, photoPost, postCollection)
    {
        oV = new View();
        
		if(postCollection.edit(id, photoPost))
        {
            oV.editPhotoPost(id, photoPost);
            return true;
        }
        
		return false;
    }
    
	function removePhotoPost(id, postCollection)
    {
        oV = new View();
        
		if(postCollection.remove(id))
        {
            oV.removePhotoPost(id);
            return true;
        }
        
		return false;

    }
	
    photoposts.addPhotoPost = addPhotoPost;
    photoposts.editPhotoPost = editPhotoPost;
    photoposts.removePhotoPost = removePhotoPost;
    
	let viewController = new View();
    viewController.authorization("photos/Man.jpg", "Mike Phillips");
   
	let photoPosts = new PostCollection([
        {
            id: '0',
            description: 'Красная панда',
            createdAt: new Date('2357-02-23T23:00:00'),
            author: 'Mike Phillips',
            photoLink: 'photos/Panda.jpg',
            photoLinkAuthor: 'photos/Man.jpg',
            hashTags: ['#Красная панда','#Зверь из Китая'],
            likes: ['Ann', 'Егор'],
        },
        {
			id: '1',
			description: "Иииииииии-а-ха",
			createdAt: new Date('2357-02-23T23:00:00'),
			author: 'Mike Phillips',
			photoLink: 'photos/Panda.jpg',
			photoLinkAuthor: 'photos/Man.jpg',
			hashTags: ['#Красная панда','#Зверь из Китая'],
			likes:['Ann','Егор']
        },
		{
			id: '1',
			description: "Иииииииии-а-ха",
			createdAt: new Date('2357-02-23T23:00:00'),
			author: 'Mike Phillips',
			photoLink: 'photos/Panda.jpg',
			photoLinkAuthor: 'photos/Man.jpg',
			hashTags: ['#Красная панда','#Зверь из Китая'],
			likes:['Ann','Егор']
        },
        {
            id: '2',
            description: "Панда, просто панда",
            createdAt: new Date('2357-02-23T23:00:00'),
            author: 'Mike Phillips',
            photoLink: 'photos/Panda.jpg',
            photoLinkAuthor: 'photos/Man.jpg',
            hashTags: ['#Красная панда','#Зверь из Китая'],
            likes: ['Ann', 'Егор']
        },
    ]);
		
    let editphotoPost =
        {
            id: '0',
            description: 'Новая панда',
            createdAt: new Date('2357-02-23T23:00:00'),
            author: 'Mike Phillips',
            photoLink: 'photos/Panda.jpg',
            photoLinkAuthor: 'photos/Man.jpg',
            hashTags: ['#Что новое','#И ещё новое'],
            likes:['Ann','Егор']
        };
		
    /*viewController.addPhotoPost(testphotoPost);
    viewController.addPhotoPost(testphotoPost);
    viewController.addPhotoPost(testphotoPost);
	viewController.editPhotoPost('0', editphotoPost);
    viewController.removePhotoPost('1');*/
    
    photoposts.addPhotoPost(photoPosts._photoPosts[0]);
    photoposts.addPhotoPost(photoPosts._photoPosts[1]);
    photoposts.addPhotoPost(photoPosts._photoPosts[3]);
	
    photoposts.editPhotoPost('0', editphotoPost, photoPosts);
    photoposts.removePhotoPost('1', photoPosts);
}());