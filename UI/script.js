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

	let photoPosts = new PostCollection([
		{
            id: '1',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
		},
		{
            id: '2',
            description: 'Красная или малая панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '3',
            description: 'Письменные упоминания об этом звере в Китае восходят к XIII столетию.',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '4',
            description: 'Красная панда',
            createdAt: new Date('2016-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '5',
            description: 'Красная панда',
            createdAt: new Date('2017-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '6',
            description: 'Красная панда',
            createdAt: new Date('2014-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Красивый зверёк'],
            likes:['Ann','Егор']
        },
		{
            id: '7',
            description: 'Красная панда',
            createdAt: new Date('2008-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '8',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '9',
            description: 'Красная панда',
            createdAt: new Date('2003-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Красивый зверёк'],
            likes:['Ann','Егор']
        },
		{
            id: '10',
            description: 'Красная панда',
            createdAt: new Date('2021-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '11',
            description: 'Красная панда',
            createdAt: new Date('2039-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Красивый зверёк'],
            likes:['Ann','Егор']
        },
		{
            id: '12',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '13',
            description: 'Красная панда',
            createdAt: new Date('2001-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '14',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '15',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '16',
            description: 'Красная панда',
            createdAt: new Date('2010-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '17',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Красивый зверёк'],
            likes:['Ann','Егор']
        },
		{
            id: '18',
            description: 'Красная панда',
            createdAt: new Date('2016-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '19',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Красивый зверёк'],
            likes:['Ann','Егор']
        },
		{
            id: '20',
            description: 'Красная панда',
            createdAt: new Date('2020-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
    ]);
	
	let photoPostsArr;
    let photoPost; 
	
	//////////////////////getPage:
    console.log('Проверка getPage с двумя валидными параметрами:');
    photoPostsArr = photoPosts.getPage(0,5);
    console.log(photoPostsArr);
    console.log('Проверка getPage с тремя валидными параметрами:');
    photoPostsArr = photoPosts.getPage(0,3,{author:'Mike Phillips', createdAt: new Date('2019-03-03T13:09:00'), hashTags:['Красная панда', 'Зверь из Китая']});
	console.log(photoPostsArr);
    console.log('Проверка getPage с тремя валидными параметрами:');
    photoPostsArr = photoPosts.getPage(0,5,{hashTags:['Красная панда', 'Красивый зверёк']});
    console.log(photoPostsArr);
    console.log('Проверка getPage когда по третьему параметру ничего не подходит:');
    photoPostsArr = photoPosts.getPage(5,10,{author:'Mikesdhgf gdfggPhillips', hashTags:['Красная панда', 'Зверь из Китая']});
    console.log(photoPostsArr);
	
	//////////////////////////get
    console.log('Проверка get с существующим индексом:');
    photoPost = photoPosts.get('3');
    console.log(photoPost);
    console.log('Проверка get с несуществующим индексом:');
    photoPost = photoPosts.get('25');
    console.log(photoPost);
    
	////////////////////////////validate/add
    console.log('Проверка методов validate и add с валидным объектом:');
    let photoPostIfValidate =
    {
        id: '111',
        description: 'Красная панда',
        createdAt: new Date('2357-02-23T23:00:00'),
        author: 'EgorSem',
        photoLink: 'Panda.jpg',
        hashTags: ['Для проверки №1','Для проверки №2'],
        likes:['Ann','Егор']
    }
	console.log('Валидность элемента:');
    console.log(PostCollection.validate(photoPostIfValidate));
    console.log('После добавления этого элемента:');
    console.log(photoPosts.add(photoPostIfValidate));
    console.log(photoPosts);
    console.log('Проверка методов validate и add с не валидным объектом:');
    photoPostIfValidate =
        {
            id: '-399',
            description: 'Очень интересная информация',
            createdAt: new Date('2357-02-23m23:00:00'),
            author: 'EgorSem',
            photoLink: 'Panda.jpg',
            hashTags: ['Для проверки №1','Для проверки №2'],
            likes:['Ann','Егор']
        }
	console.log('Валидность элемента:');
    console.log(PostCollection.validate(photoPostIfValidate));
    console.log('После добавления этого элемента:');
    console.log(photoPosts.add(photoPostIfValidate));
    console.log(photoPosts);
	
	////////////////////////////addAll
	console.log('Проверка метода addAll:');
	 
	let newphotoPosts = new PostCollection([
		{
            id: '46',
            description: 'Красная панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
		},
		{
            id: '47',
            description: 'Красная или малая панда',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '-589',
            description: 'Письменные упоминания об этом звере в Китае восходят к XIII столетию.',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '458',
            description: 'Красная панда',
            createdAt: new Date('2016-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
		{
            id: '1000',
            description: 'Красная панда',
            createdAt: new Date('2017-03-03T13:09:00'),
            author: 'Mike Phillips',
            //photoLink: 'Panda.jpg',
            hashTags: ['Красная панда', 'Зверь из Китая'],
            likes:['Ann','Егор']
        },
    ]);
	
	let invalidPosts = photoPosts.addAll(newphotoPosts);
	console.log('Дополненная база фотопостов:');
	console.log(photoPosts);
	console.log('Посты, не прошедшие валидацию:');
	console.log(invalidPosts);
    
	///////////////////////edit
    console.log('Проверка метода edit:');
    let photoPostEdit =
        {
			id: '300',
            description: 'Описание',
            createdAt: new Date('2369-03-23T23:00:00'),
            author: 'EgorSem',
            photoLink: 'Panda.jpg',
            hashTags: ['Хэштег №1','Хэштег №2'],
            likes:['Ann','Егор']
        };
	photoPosts.add(photoPostEdit);
	console.log(photoPosts);
    console.log('После редактирования:');
    console.log(photoPosts.edit('300',{description: 'Новое описание', hashTags: ['Новый хэштег №1', 'Новый хэштег №2'], photoLink: 'Новая ссылка.jpg'}));
    console.log(photoPosts);
    
	/////////////////remove
    console.log('Проверка метода remove:');
    console.log(photoPosts.remove('2'));
    console.log(photoPosts);