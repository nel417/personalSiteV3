import React from "react";
import "@react95/icons/icons.css";
import {
    FolderExe,
    MsDos
    
 } from '@react95/icons';
const HomePrograms = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', lineHeight: '0', marginTop: '36px' }}>
    <div style={{ margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Crystal128-netscape.svg/1200px-Crystal128-netscape.svg.png"
        style={{ height: "50px", marginBottom: '24px' }}
      />
      <p>Netscape</p>
    </div>
    
    <div style={{ margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '40px' }}>
      <MsDos variant="48x48_32" style={{marginBottom: '24px'}} />
      <p>DOS</p>
    </div>
    
    <div style={{ margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="https://64.media.tumblr.com/b351f8f6b28d1ee547c021bed3229d4e/8f9d2c9f1cbbd587-6e/s540x810/cf369e62fcff850b6dd3dd22c6f02f82877871a2.png"
        style={{height: '100px'   }}
      />
      <p>AOL</p>

    </div>

    <div style={{ margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="https://64.media.tumblr.com/99669f235b0782af44af28e67d857e27/f17c01b666791dea-fa/s1280x1920/c20060322f77ea9914203b9bf4dba50781c1dd1c.png"
        style={{height: '100px'   }}
      />
      <p>Serious Sam</p>
    </div>
    <div style={{ margin: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <img
        src="https://64.media.tumblr.com/091f6ca6786bef91bfe2fb44fa527d4f/a43fbec175e09678-75/s1280x1920/e85704ed54d8e4e4d18ffeb1a71933bb86e6174f.png"
        style={{height: '100px'   }}
      />
      <p>Unreal Tournament</p>

    </div>

  </div>
  
  
  );
};

export default HomePrograms;
