;(function() {
	var PhotoPosts = [
		{
            id: '1',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
		},
		{
            id: '2',
            description: '������� �����, �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '3',
            description: '���������� ���������� �� ���� ����� � ����� �������� � XIII ��������',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '4',
            description: '������� �����',
            createdAt: new Date('2016-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '5',
            description: '������� �����',
            createdAt: new Date('2017-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '6',
            description: '������� �����',
            createdAt: new Date('2014-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '7',
            description: '������� �����',
            createdAt: new Date('2008-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '8',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '9',
            description: '������� �����',
            createdAt: new Date('2003-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '10',
            description: '������� �����',
            createdAt: new Date('2021-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '11',
            description: '������� �����',
            createdAt: new Date('2039-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '12',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '13',
            description: '������� �����',
            createdAt: new Date('2001-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '14',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','�������� �����'],
            likes:['Ann','����']
        },
		{
            id: '15',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '16',
            description: '������� �����',
            createdAt: new Date('2010-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '17',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','���������'],
            likes:['Ann','����']
        },
		{
            id: '18',
            description: '������� �����',
            createdAt: new Date('2016-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '19',
            description: '������� �����',
            createdAt: new Date('2019-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
		{
            id: '20',
            description: '������� �����',
            createdAt: new Date('2020-03-03T13:09:00'),
            author: 'Mike Phillips',
            photoLink: 'Panda.jpg',
            hashTags: ['������������','����� �� �����'],
            likes:['Ann','����']
        },
    ];
	
	function getPhotoPosts(skip = 0, top = 10, filterConfig)
    {
		var PhotoPostsFiltered = [];
		
		if ((skip >= 0 && skip < PhotoPosts.length) && (top > 0 && top <= PhotoPosts.length))
		{
			if (filterConfig != undefined)
            {
				if ('author' in filterConfig && filterConfig.author != undefined)
                {
					if ('createdAt' in filterConfig && filterConfig.createdAt != undefined)
					{
						if ('hashTags' in filterConfig && filterConfig.hashTags != undefined)
						{
							for (var i = 0; i < PhotoPosts.length; i++) 
							{
								if (PhotoPosts[i].author == filterConfig.author && PhotoPosts[i].createdAt == filterConfig.createdAt)
								{
									pass:
									for (var k = 0; k < filterConfig.hashtags.length; k++) 
									{
										for (var j = 0; j < PhotoPosts[i].hashtags.length; j++) 
										{
											if (filterConfig.hashtags[k] == PhotoPosts[i].hashtags[j])
											{
												PhotoPostsFiltered.push(PhotoPosts[i]);
												break pass;
											}
										}
									}
								}
							}
						}
						else
						{
							for (var i = 0; i < PhotoPosts.length; i++) 
							{
								if (PhotoPosts[i].author == filterConfig.author && PhotoPosts[i].createdAt == filterConfig.createdAt)
								{
									PhotoPostsFiltered.push(PhotoPosts[i]);
								}
							}
						}
					}
					else
					{
						if ('hashTags' in filterConfig && filterConfig.hashTags != undefined)
						{
							for (var i = 0; i < PhotoPosts.length; i++) 
							{
								if (PhotoPosts[i].author == filterConfig.author)
								{
									pass:
									for (var k = 0; k < filterConfig.hashtags.length; k++) 
									{
										for (var j = 0; j < PhotoPosts[i].hashtags.length; j++) 
										{
											if (filterConfig.hashtags[k] == PhotoPosts[i].hashtags[j])
											{
												PhotoPostsFiltered.push(PhotoPosts[i]);
												break pass;
											}
										}
									}
								}
							}
						}
						else
						{
							for (var i = 0; i < PhotoPosts.length; i++) 
							{
								if (PhotoPosts[i].author == filterConfig.author)
								{
									PhotoPostsFiltered.push(PhotoPosts[i]);
								}
							}
						}
					}
                }
				else
				{
					if ('createdAt' in filterConfig && filterConfig.createdAt != undefined)
					{
						if ('hashTags' in filterConfig && filterConfig.hashTags != undefined)
						{
							for (var i = 0; i < PhotoPosts.length; i++)
							{
								if (PhotoPosts[i].createdAt == filterConfig.createdAt)
								{
									pass:
									for (var k = 0; k < filterConfig.hashtags.length; k++) 
									{
										for (var j = 0; j < PhotoPosts[i].hashtags.length; j++) 
										{
											if (filterConfig.hashtags[k] == PhotoPosts[i].hashtags[j])
											{
												PhotoPostsFiltered.push(PhotoPosts[i]);
												break pass;
											}
										}
									}
								}
							}
						}
						else
						{
							for (var i = 0; i < PhotoPosts.length; i++) 
							{
								if (PhotoPosts[i].createdAt == filterConfig.createdAt)
								{
									PhotoPostsFiltered.push(PhotoPosts[i]);
								}
							}
						}
					}
					else
					{
						if ('hashTags' in filterConfig && filterConfig.hashTags != undefined)
						{
							for (var i = 0; i < PhotoPosts.length; i++)
							{
								pass:
								for (var k = 0; k < filterConfig.hashtags.length; k++) 
								{
									for (var j = 0; j < PhotoPosts[i].hashtags.length; j++) 
									{
										if (filterConfig.hashtags[k] == PhotoPosts[i].hashtags[j])
										{
											PhotoPostsFiltered.push(PhotoPosts[i]);
											break pass;
										}
									}
								}
							}
						}
						else
						{
							PhotoPostsFiltered = PhotoPosts;
						}
					}
				}
			}
			else
			{
				PhotoPostsFiltered = PhotoPosts;
			}
			
			PhotoPostsFiltered.sort(function (a, b)
            {
                return new Date(b.createdAt) - new Date(a.createdAt);
            });
          
            PhotoPostsFiltered = PhotoPostsFiltered.slice(skip, skip + top);
			return PhotoPostsFiltered;
		}
		else
		{
			return PhotoPostsFiltered;
		}
	}
	
	function getPhotoPost(id)
    {
        var PhotoPost;
        for (var i = 0; i < PhotoPosts.length; i++)
		{
            if (PhotoPosts[i].id == id)
            {
                PhotoPost = PhotoPosts[i];
                return PhotoPost;
            }
        }
		
        PhotoPost =
            {
                id: 'notfound',
				description: 'notfound',
                createdAt: new Date('0001-01-01T00:00:00'),
                author: 'notfound',
                photoLink: 'notfound',
                hashtags: ['notfound'],
                likes:['notfound']
             };
        return PhotoPost;
    }

	function validatePhotoPost(PhotoPost)
    {
        if(PhotoPost === undefined)
        {
            return false;
        }
        
		var TYPESTRING = '[object String]';
        var TYPEDATE = '[object Date]';
        var TYPEOBJECT = '[object Array]';
        var toString = {}.toString;
        
		return 	(TYPESTRING == toString.call(PhotoPost.id))&&
		(TYPESTRING == toString.call(PhotoPost. description))&&
        (TYPESTRING == toString.call(PhotoPost.author))&&
		(TYPEDATE == toString.call(PhotoPost.createdAt))&&
		(PhotoPost.createdAt != 'Invalid Date')&&
		(TYPESTRING == toString.call(PhotoPost.photoLink))&&
		(TYPEOBJECT == toString.call(PhotoPost.hashtags))&&
		(TYPEOBJECT == toString.call(PhotoPost.likes))
    }

	function addPhotoPost(PhotoPost)
    {
        if(validatePhotoPost(PhotoPost))
        {
            PhotoPosts.push(PhotoPost);
            return true;
        }
        return false;
    }
	
	function editPhotoPost(id, PhotoPost)
    {
		let index = getIndexId(id);
		
		if(index == -1)
		{
           return false;
		}

		if(PhotoPost.description != undefined)
		{
			var TYPESTRING = '[object String]';
			var toString = {}.toString;
			
			if (TYPESTRING == toString.call(PhotoPost. description))
			{
				PhotoPosts[index].description = PhotoPost.description;
			}
			else
			{
				return false;
			}
		}
      
        if(PhotoPost.photoLink != undefined)
        {
			var TYPESTRING = '[object String]';
			var toString = {}.toString;
			
			if(TYPESTRING == toString.call(PhotoPost.photoLink))
			{
				PhotoPosts[index].photoLink = PhotoPost.photoLink;
			}
			else
			{
				return false;
			}
        }
		
		if(PhotoPost.hashTags != undefined)
        {
			var TYPESTRING = '[object String]';
			var toString = {}.toString;
			
			if(TYPEOBJECT == toString.call(PhotoPost.hashtags))
			{
				PhotoPosts[index].hashTags = PhotoPost.hashTags;
			}
			else
			{
				return false;
			}
        }
		
		return true;
    }

	function removePhotoPost(id)
    {
		let tempId = getIndexId(id);
        
		if(tempId != -1)
		{
            PhotoPosts.splice(tempId, 1);
            return true;
        }
		return false;
    }

	function getIndexId(id)
    {
        for (var i = 0; i < PhotoPosts.length; i++)
        {
            if (PhotoPosts[i].id == id)
            {
                return i;
            }
        }
        return -1;
    }
	
	PhotoPosts.getPhotoPosts = getPhotoPosts;
    PhotoPosts.getPhotoPost = getPhotoPost;
    PhotoPosts.validatePhotoPost = validatePhotoPost;
    PhotoPosts.addPhotoPost = addPhotoPost;
    PhotoPosts.editPhotoPost = editPhotoPost;
    PhotoPosts.removePhotoPost = removePhotoPost;
    PhotoPosts.getIndexId = getIndexId;
	
	var PhotoPostsArr;
    var PhotoPost;
    
	//////////////////////getPhotoPosts:
    console.log('�������� getPhotoPosts � ����� ��������� �����������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(0,5);
    console.log(PhotoPostsArr);
    console.log('�������� getPhotoPosts � ����� ��������� �����������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(0,3,{author:'Mike Phillips', hashtags:['������������','����� �� �����']});
	console.log(PhotoPostsArr);
    console.log('�������� getPhotoPosts � ����� ��������� �����������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(0,5,{hashtags:['������������','����� �� �����']});
    console.log(PhotoPostsArr);
    console.log('�������� getPhotoPosts � ������ ���������� ����������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(-1,5,{author:'Mike Phillips'});
    console.log(PhotoPostsArr);
    console.log('�������� getPhotoPosts �� ������ ���������� ����������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(1,100,{author:'Mike Phillips', hashtags:['������������','����� �� �����']});
    console.log(PhotoPostsArr);
    console.log('�������� getPhotoPosts � ����� ����������� ����������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(-2,100,{author:'Mike Phillips'});
    console.log(PhotoPostsArr);
    console.log('�������� getPhotoPosts ����� �� �������� ��������� ������ �� ��������:');
    PhotoPostsArr = PhotoPosts.getPhotoPosts(5,10,{author:'Mikesdhgf gdfggPhillips', hashtags:['������������','����� �� �����']});
    console.log(PhotoPostsArr);
	
	//////////////////////////getPhotoPost
    console.log('�������� getPhotoPost � ������������ ��������:');
    PhotoPost = PhotoPosts.getPhotoPost(3);
    console.log(PhotoPost);
    console.log('�������� getPhotoPost � �������������� ��������:');
    PhotoPost = PhotoPosts.getPhotoPost(25);
    console.log(PhotoPost);
    
	////////////////////////////validatePhotoPost/addPhotoPost
    console.log('�������� ������� validatePhotoPost � addPhotoPost � �������� ��������:');
    var PhotoPostIfValidate =
    {
        id: '111',
        description: '���-������',
        createdAt: new Date('2357-02-23T23:00:00'),
        author: 'EgorSem',
        photoLink: 'Panda.jpg',
        hashtags: ['�������� �����','�����'],
        likes:['Ann','����']
    }
	console.log('���������� ��������:');
    console.log(PhotoPosts.validatePhotoPost(PhotoPostIfValidate));
    console.log('���������� ��������� ��������:');
    console.log(PhotoPosts.addPhotoPost(PhotoPostIfValidate));
    console.log(PhotoPosts);
    console.log('�������� ������� validatePhotoPost � addPhotoPost � �� �������� ��������:');
    PhotoPostIfValidate =
        {
            id: '-399',
            description: '� ��� ���-������(������� �� �����������)',
            createdAt: new Date('2357-02-23m23:00:00'),
            author: 'EgorSem',
            photoLink: 'Panda.jpg',
            hashtags: ['�������� �����','�����'],
            likes:['Ann','����']
        }
	console.log('���������� ��������:');
    console.log(PhotoPosts.validatePhotoPost(PhotoPostIfValidate));
    console.log('���������� ����������� ��������:');
    console.log(PhotoPosts.addPhotoPost(PhotoPostIfValidate));
    console.log(PhotoPosts);
    
	///////////////////////editPhotoPost
    console.log('�������� ������ editPhotoPost:');
    var PhotoPostEdit =
        {
			id: '300',
            description: '� ����� ���-������',
            createdAt: new Date('2369-03-23T23:00:00'),
            author: 'EgorSem',
            photoLink: 'Panda.jpg',
            hashtags: ['�������� �����','�����'],
            likes:['Ann','����']
        };
    console.log(PhotoPostEdit);
	PhotoPosts.addPhotoPost(PhotoPostEdit);
    console.log('����� ��������������:');
    console.log(PhotoPosts.editPhotoPost(300,{description: '����� ��������', photoLink: '����� �����.jpg'}));
    console.log(PhotoPosts);
    
	/////////////////removePhotoPost
    console.log('�������� ������ removePhotoPost:');
    console.log(PhotoPosts.removePhotoPost(2));
    console.log(PhotoPosts);
}());