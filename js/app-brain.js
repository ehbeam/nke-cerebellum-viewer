
var nke_palette = ["nke_blue", "nke_magenta", "nke_yellow", "nke_green", "nke_red", 
                   "nke_purple", "nke_chartreuse", "nke_orange", "nke_pink", "nke_brown", 
                   "nke_slate", "nke_crimson", "nke_gold", "nke_teal", "nke_indigo", 
                   "nke_lobster", "nke_olive", "nke_lime", "nke_sky", "nke_fuschia", 
                   "nke_violet", "nke_tan", "nke_berry", "nke_mint", "nke_sun"]

var names = {2: ['Manipulation', 'Movement'],
             3: ['Arousal', 'Manipulation', 'Execution'],
             4: ['Arousal', 'Manipulation', 'Movement', 'Hearing'],
             5: ['Arousal', 'Cognitive', 'Movement', 'Vision', 'Hearing'],
             6: ['Memory', 'Reward', 'Cognitive', 'Movement', 'Vision', 'Hearing'],
             7: ['Memory', 'Reward', 'Cognitive', 'Execution', 'Movement', 'Vision', 'Hearing'],
             8: ['Emotion', 'Reward', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Vision', 'Language'],
             9: ['Memory', 'Reward', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Vestibular', 'Vision', 'Language'],
             10: ['Memory', 'Emotion', 'Reward', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Vision', 'Perception', 'Language'],
             11: ['Memory', 'Emotion', 'Anticipation', 'Cognitive', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Rest', 'Vision', 'Hearing'],
             12: ['Memory', 'Emotion', 'Reward', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Rest', 'Vestibular', 'Vision', 'Hearing', 'Language'],
             13: ['Memory', 'Episodic Memory', 'Reward', 'Reaction Time', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Rest', 'Vestibular', 'Vision', 'Perception', 'Language'],
             14: ['Memory', 'Emotion', 'Reward', 'Anticipation', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Rest', 'Vestibular', 'Vision', 'Perception', 'Language'],
             15: ['Memory', 'Emotion', 'Reward', 'Anticipation', 'Cognitive', 'Cognitive Function', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Rest', 'Covert', 'Vision', 'Language'],
             16: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Decision Making', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Rest', 'Covert', 'Vision', 'Hearing', 'Language'],
             17: ['Memory', 'Emotion', 'Reward', 'Arousal', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Arm', 'Rest', 'Hunger', 'Covert', 'Vision', 'Hearing', 'Language'],
             18: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Anticipation', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Motor Learning', 'Coordination', 'Arm', 'Rest', 'Vestibular', 'Covert', 'Vision', 'Language'],
             19: ['Memory', 'Episodic Memory', 'Emotion', 'Mood', 'Reward', 'Agency', 'Cognitive', 'Cognitive Process', 'Representation', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Arm', 'Rest', 'Vision', 'Hearing', 'Meaning'],
             20: ['Memory', 'Emotion', 'Reward', 'Arousal', 'Cognition', 'Cognitive', 'Planning', 'Execution', 'Movement', 'Motor Control', 'Motor Learning', 'Coordination', 'Foot', 'Hand', 'Rest', 'Covert', 'Vision', 'Perception', 'Language', 'Word'],
             21: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Arousal', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Motor Learning', 'Coordination', 'Arm', 'Foot', 'Hand', 'Rest', 'Hunger', 'Covert', 'Vision', 'Hearing', 'Language'],
             22: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Decision Making', 'Reaction Time', 'Cognitive', 'Cognitive Function', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Motor Learning', 'Coordination', 'Arm', 'Foot', 'Rest', 'Hunger', 'Vision', 'Hearing', 'Language', 'Meaning'],
             23: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Judging', 'Arousal', 'Anticipation', 'Cognitive', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Motor Learning', 'Coordination', 'Arm', 'Foot', 'Rest', 'Hunger', 'Vision', 'Imagery', 'Hearing', 'Language', 'Meaning'],
             24: ['Memory', 'Episodic Memory', 'Emotion', 'Reward', 'Valence', 'Judging', 'Arousal', 'Anticipation', 'Cognition', 'Manipulation', 'Execution', 'Movement', 'Motor Control', 'Motor Learning', 'Coordination', 'Arm', 'Foot', 'Hunger', 'Vestibular', 'Covert', 'Vision', 'Hearing', 'Language', 'Meaning'],
             25: ['Memory', 'Episodic Memory', 'Retrieval', 'Emotion', 'Reward', 'Valence', 'Arousal', 'Anticipation', 'Cognition', 'Manipulation', 'Preparation', 'Execution', 'Movement', 'Motor Control', 'Coordination', 'Arm', 'Foot', 'Hand', 'Rest', 'Hunger', 'Covert', 'Vision', 'Hearing', 'Language', 'Meaning']}

var viewerHTML = "<div class='view' id='view_coronal' style='margin-left:15px'><canvas height='220' id='cor_canvas' width='220'></canvas><div class='slider nav-slider-vertical' id='nav-yaxis' style='float:left'></div></div><div class='view' id='view_sagittal'><canvas height='220' id='sag_canvas' width='264'></canvas><div class='slider nav-slider-horizontal' id='nav-xaxis'></div></div><div class='view' id='view_axial'><canvas height='220' id='axial_canvas' width='183'></canvas><div class='slider nav-slider-vertical' id='nav-zaxis' style='float:right'></div></div><div align='center' style='width:200px;float:left'><div id='layer_list_panel' align='center'><p style='margin-left:0px;'>Layers</p><div id='layer_visible_list' align='center'></div><ul id='layer_list' class='layer_settings' align='center'></ul></div><div id='viewer_panel'><div id='layer_list_panel'><div id='layer_visible_list'></div><ul id='layer_list' class='layer_settings'></ul></div><p style='margin-left:-15px;'>Opacity</p><div id='opacity_panel' align='left'><select id='select_color' class='layer_settings' style='display:none'></select><div class='slider layer_settings' id='opacity' align='center' style='width:195px'></div></div><p id='value_title' style='margin-left:-15px;'>Voxel Value</p><div id='value_panel' align='left'><a href='#' id='value_data_tooltip' data-tooltip='Select a domain number to see its mapping'><span id='value_data'></span></a></div></div></div>";

function pad(number) { return (number < 10 ? '0' : '') + number };

function loadDomains() {
    document.getElementById("intro_container").style.display = "none";
    document.getElementById("domain_container").innerHTML = viewerHTML;
    document.getElementById("chart").innerHTML = "";
    document.getElementById("hierarchy").innerHTML = "";
    loadBrainMap(0)
}

function loadBrainMap(k) {

    document.getElementById("intro_container").style.display = "none";
    document.getElementById("chart").style.display = "inline-block";
    document.getElementById("domain_container").innerHTML = viewerHTML;

    viewer = new Viewer('#layer_list', '.layer_settings');
    viewer.addView('#view_axial', Viewer.AXIAL);
    viewer.addView('#view_coronal', Viewer.CORONAL);
    viewer.addView('#view_sagittal', Viewer.SAGITTAL);
    viewer.addSlider('opacity', '.slider#opacity', 'horizontal', 0, 1, 1, 0.05);
    viewer.addSlider("nav-xaxis", ".slider#nav-xaxis", "horizontal", 0, 1, 0.5, 0.01, Viewer.XAXIS);
    viewer.addSlider("nav-yaxis", ".slider#nav-yaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.YAXIS);
    viewer.addSlider("nav-zaxis", ".slider#nav-zaxis", "vertical", 0, 1, 0.5, 0.01, Viewer.ZAXIS);
    viewer.clear()   // Paint canvas background while images load
    
    images = [{
                'url': 'data/MNI152_T1_2mm_brain.nii.gz',
                'name': 'MNI152',
                'colorPalette': 'grayscale',
                'cache': false,
            }];

    for (i = 1; i < k + 1; i++) {
        images.push({
                        'url': 'data/k' + pad(k) + '/circuit_k' + pad(k) + '_dom' + pad(i) + '.nii.gz',
                        'name': names[k][i-1],
                        'colorPalette': nke_palette[i-1],
                        'opacity': 0.5,
                        'cache': false,
                        'val': 0.5
                    })
        };
    viewer.loadImages(images);

};
