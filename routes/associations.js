const User = require("../models/User");
const Chapter = require("../models/Chapter");
const Content = require("../models/Content");
const MetaData = require("../models/Metadata");
const ChaptersUnlocked = require("../models/Chaptersunlocked");

//chapter <> content
Chapter.belongsTo(Content,{foreignKey:'contentId'});
Content.hasMany(Chapter,{foreignKey:'contentId'});

//MetaData <> Chapter
MetaData.belongsTo(Chapter,{foreignKey:'chapterId'});
Chapter.hasOne(MetaData,{foreignKey:'chapterId'});

//User <> ChapterUnlocked
User.hasMany(ChaptersUnlocked , {foreignKey: 'userid'})
ChaptersUnlocked.belongsTo(User,{foreignKey : 'userId'})

//ChaptersUnloacked <> content
ChaptersUnlocked.belongsTo(Content,{foreignKey:'contentId'});
Content.hasMany(ChaptersUnlocked,{foreignKey:'contentId'});

