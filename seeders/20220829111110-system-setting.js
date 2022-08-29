'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('system_settings', [
      {
        system_setting_id: 1,
        name: "Bilal Alsam",
        email: "bilal.aslam@invozone.com",
        contact: "03107654985",
        cover_img: "1600654680_photo-1504674900247-0877df9cc836.jpg",
        about_content: "&lt;p style=&quot;text-align: center; background: transparent; position: relative;&quot;&gt;&lt;span style=&quot;font-size:28px;background: transparent; position: relative;&quot;&gt;&lt;b style=&quot;margin: 0px; padding: 0px; color: rgb(0, 0, 0); font-family: &amp;quot;Open Sans&amp;quot;, Arial, sans-serif; text-align: justify;&quot;&gt;NICE!&lt;/b&gt;&lt;br&gt;&lt;/span&gt;&lt;/p&gt;&lt;",
        createdAt: new Date(),
      updatedAt: new Date()
    },
    
  ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('system_settings', null, {});
  }
};