class TapeView{

    constructor()
    {
        this.user = '';
        this.ifAuthorized = false;

        const template = document.getElementById('UserLogoName-template');
        let newUser = document.importNode(template.content, true);
        document.getElementById('userLogoName').appendChild(newUser);
    }

	authorization(user)
    {
        const template = document.getElementById('UserLogoName-template');
        let newUser = document.importNode(template.content, true);

        if (user != undefined)
        {
            newUser.getElementById('userLogo').setAttribute('src', user.logo);
            newUser.getElementById('userName').innerText = user.name;

            this.user = user.name;
            this.ifAuthorized = true;
        }
        else
        {
            newUser.getElementById('userLogo').style.display = 'none';
            newUser.getElementById('userLogo').setAttribute('src', '');
            newUser.getElementById('userName').innerText = '';

            this.user = '';
            this.ifAuthorized = false;
        }

        document.getElementById('userLogoName').replaceChild(newUser, document.getElementById('userlogoname'));

        let photoPosts = document.getElementsByClassName('container');
        let photoPostsArray = Array.from(photoPosts);

        photoPostsArray.forEach(item =>
        {
            if (item.getElementsByClassName('AuthorName')[0].innerText != this.user)
            {
                item.getElementsByClassName('buttonEdit')[0].style.display = 'none';
                item.getElementsByClassName('buttonDelete')[0].style.display = 'none';
            }
            else
            {
                item.getElementsByClassName('buttonEdit')[0].style.display = '';
                item.getElementsByClassName('buttonDelete')[0].style.display = '';
            }
        });
    }
	
    addPhotoPost(photoPost)
    {
        const template = document.getElementById('container-template');
        let newphotoPost = document.importNode(template.content, true);

        this.setPhoto('authorLogo', photoPost.photoLinkAuthor, newphotoPost);
        this.setInner('authorName', photoPost.author, newphotoPost);
        this.setDate(photoPost.createdAt, newphotoPost);
        this.setHashtags(photoPost.hashTags, newphotoPost);
        this.setInner('description', photoPost.description, newphotoPost);
        this.setPhoto('photo', photoPost.photoLink, newphotoPost);
        this.setLikes(photoPost.likes, newphotoPost);

        if (newphotoPost.getElementById('authorName').innerText != this.user)
        {
            newphotoPost.getElementById('buttonedit').style.display = 'none';
            newphotoPost.getElementById('buttondelete').style.display = 'none';
        }
        
		document.getElementById('tape').appendChild(newphotoPost);
    }
	
    editPhotoPost(id, photoPost)
    {
        let photoPosts = document.getElementsByClassName('container');
        let photoPostsArray = Array.from(photoPosts);
        const prevPhotoPost = photoPostsArray[id];
        const template = document.getElementById('container-template');
        let editedphotoPost = document.importNode(template.content, true);

        if(!this.setPhoto('authorLogo', photoPost.photoLinkAuthor, editedphotoPost))
        {
            this.setPhoto('authorLogo', prevPhotoPost.getElementsByClassName('AuthorLogo')[0].children[0].getAttribute('src'), editedphotoPost);
        }

        if(!this.setInner('authorName', photoPost.author, editedphotoPost))
        {
            this.setInner('authorName', prevPhotoPost.getElementsByClassName('AuthorName')[0].innerText, editedphotoPost);
        }

        if(!this.setDate(photoPost.createdAt, editedphotoPost))
        {
            this.setInner('date', prevPhotoPost.getElementsByClassName('Date')[0].innerText, editedphotoPost);
        }

        if(!this.setHashtags(photoPost.hashTags, editedphotoPost))
        {
            this.setInner('hashTags', prevPhotoPost.getElementsByClassName('HashTags')[0].innerText, editedphotoPost);
        }

        if(!this.setInner('description', photoPost.description, editedphotoPost))
        {
            this.setInner('description', prevPhotoPost.getElementsByClassName('Description')[0].innerText, editedphotoPost);
        }

        if(!this.setPhoto('photo', photoPost.photoLink, editedphotoPost))
        {
            this.setPhoto('photo',  prevPhotoPost.getElementsByClassName('Photo')[0].children[0].getAttribute('src'), editedphotoPost);
        }

        if(!this.setLikes(photoPost.likes, editedphotoPost))
        {
            this.setInner('numofLikes',  prevPhotoPost.getElementsByClassName('NumofLikes')[0].innerText, editedphotoPost);
        }

        if (editedphotoPost.getElementById('authorName').innerText != this.user)
        {
            editedphotoPost.getElementById('buttonedit').style.display = 'none';
            editedphotoPost.getElementById('buttondelete').style.display = 'none';
        }

        document.getElementById('tape').replaceChild(editedphotoPost, photoPostsArray[id]);
    }

    setInner(id, edition, node)
    {
        let temp = node.getElementById(id).innerText;
        if(edition != undefined)
        {
            node.getElementById(id).innerText = edition;
            return true;
        }

        return false;
    }

    setPhoto(id, edition, node)
    {
        if(edition != undefined)
        {
            node.getElementById(id).setAttribute('src', edition);
            return true;
        }

        return false;
    }

    setDate(edition, node)
    {
        if(edition != undefined)
        {
            const options = {
                year: 'numeric',
                month: 'numeric',
                day: 'numeric',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
            };

            this.setInner('date', edition.toLocaleString('ru', options), node);
            return true;
        }

        return false;
    }

    setHashtags(edition, node)
    {
        if(edition != undefined)
        {
            let str = '';

            edition.forEach(item =>
            {
                str = str + item + ' ';
            });
            this.setInner('hashTags', str, node);
            return true;
        }

        return false;
    }

    setLikes(edition, node)
    {
        if(edition != undefined)
        {
            this.setInner('numofLikes', edition.length, node);
            return true;
        }

        return false;
    }
	
    removePhotoPost(id)
    {
        let photoPosts = document.getElementsByClassName('container');
        let photoPostsArray = Array.from(photoPosts);
		
        document.getElementById('tape').removeChild(photoPostsArray[id]);
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
	
    function addPhotoPost(photoPost, postCollection, tapeView)
    {
		if(postCollection.add(photoPost))
        {
            tapeView.addPhotoPost(photoPost);
            return true;
        }
		
        return false;
    }
	
    function editPhotoPost(id, photoPost, postCollection, tapeView)
    {
		if(postCollection.edit(id, photoPost))
        {
            tapeView.editPhotoPost(id, photoPost);
            return true;
        }
        
		return false;
    }
    
	function removePhotoPost(id, postCollection, tapeView)
    {
		if(postCollection.remove(id))
        {
            tapeView.removePhotoPost(id);
            return true;
        }
        
		return false;

    }
	
    photoposts.addPhotoPost = addPhotoPost;
    photoposts.editPhotoPost = editPhotoPost;
    photoposts.removePhotoPost = removePhotoPost;
    
	let viewController = new TapeView();
	let photoPosts = new PostCollection();

    let temp = new PostCollection([
        {
            id: '0',
            description: 'Красная панда',
            createdAt: new Date('2357-02-23T23:00:00'),
            author: 'Nick Phillips',
            photoLink: 'photos/Panda.jpg',
            photoLinkAuthor: 'photos/Man.jpg',
            hashTags: ['#Красная панда','#Зверь из Китая'],
            likes: ['Ann', 'Егор'],
        },
        {
			id: '1',
			description: 'Иииииииии-а-ха',
			createdAt: new Date('2357-02-23T23:00:00'),
			author: 'Mike Phillips',
			photoLink: 'photos/Panda.jpg',
			photoLinkAuthor: 'photos/Man.jpg',
			hashTags: ['#Красная панда','#Зверь из Китая'],
			likes:['Ann','Егор']
        },
        {
            id: '2',
            description: 'Панда, просто панда',
            createdAt: new Date('2357-02-23T23:00:00'),
            author: 'Mike Phillips 2.0',
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
            //createdAt: new Date('2357-02-23T23:00:00'),
            //author: 'Mike Phillips',
            //photoLink: 'photos/Panda.jpg',
            //photoLinkAuthor: 'photos/Man.jpg',
            hashTags: ['#Что новое','#И ещё новое'],
            //likes:['Ann','Егор']
        };

    viewController.authorization({logo: 'photos/Man.jpg', name: 'Nick Phillips'});

    photoposts.addPhotoPost(temp._photoPosts[0], photoPosts, viewController);
    photoposts.addPhotoPost(temp._photoPosts[1], photoPosts, viewController);
    photoposts.addPhotoPost(temp._photoPosts[2], photoPosts, viewController);

    //viewController.authorization();
	
    photoposts.editPhotoPost('0', editphotoPost, photoPosts, viewController);
    photoposts.removePhotoPost('1', photoPosts, viewController);


}());