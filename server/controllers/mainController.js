/**
 * Get/
 * Homepage
 */

exports.homepage= async(req,res)=>{
    const locals={
        title: 'MyNotes',
        description: 'Free MyNotes App'
    }
    res.render('index',{
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * Get/
 * About
 */

exports.about= async(req,res)=>{
    const locals={
        title: 'About - MyNotes',
        description: 'Free MyNotes App'
    }
    res.render('about',locals);
}

