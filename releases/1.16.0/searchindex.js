Search.setIndex({docnames:["api_docs/convert_tf_sess_to_keras","api_docs/index","api_docs/quantization_encoding_specification","api_docs/tensorflow","api_docs/tensorflow_bias_correction","api_docs/tensorflow_compress","api_docs/tensorflow_cross_layer_equalization","api_docs/tensorflow_primitive_apis_cle","api_docs/tensorflow_quantization","api_docs/tensorflow_quantsim","api_docs/tensorflow_visualization_quantization","api_docs/torch","api_docs/torch_bias_correction","api_docs/torch_compress","api_docs/torch_cross_layer_equalization","api_docs/torch_model_guidelines","api_docs/torch_primitive_apis_cle","api_docs/torch_quantization","api_docs/torch_quantsim","api_docs/torch_visualization_compression","api_docs/torch_visualization_quantization","user_guide/channel_pruning","user_guide/feature_guidebook","user_guide/greedy_compression_ratio_selection","user_guide/index","user_guide/model_compression","user_guide/model_guidelines","user_guide/model_quantization","user_guide/post_training_quant_techniques","user_guide/quantization_sim","user_guide/spatial_svd","user_guide/visualization_compression","user_guide/visualization_quant","user_guide/weight_svd","user_guide/winnowing"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,sphinx:56},filenames:["api_docs/convert_tf_sess_to_keras.rst","api_docs/index.rst","api_docs/quantization_encoding_specification.rst","api_docs/tensorflow.rst","api_docs/tensorflow_bias_correction.rst","api_docs/tensorflow_compress.rst","api_docs/tensorflow_cross_layer_equalization.rst","api_docs/tensorflow_primitive_apis_cle.rst","api_docs/tensorflow_quantization.rst","api_docs/tensorflow_quantsim.rst","api_docs/tensorflow_visualization_quantization.rst","api_docs/torch.rst","api_docs/torch_bias_correction.rst","api_docs/torch_compress.rst","api_docs/torch_cross_layer_equalization.rst","api_docs/torch_model_guidelines.rst","api_docs/torch_primitive_apis_cle.rst","api_docs/torch_quantization.rst","api_docs/torch_quantsim.rst","api_docs/torch_visualization_compression.rst","api_docs/torch_visualization_quantization.rst","user_guide/channel_pruning.rst","user_guide/feature_guidebook.rst","user_guide/greedy_compression_ratio_selection.rst","user_guide/index.rst","user_guide/model_compression.rst","user_guide/model_guidelines.rst","user_guide/model_quantization.rst","user_guide/post_training_quant_techniques.rst","user_guide/quantization_sim.rst","user_guide/spatial_svd.rst","user_guide/visualization_compression.rst","user_guide/visualization_quant.rst","user_guide/weight_svd.rst","user_guide/winnowing.rst"],objects:{"aimet_common.bias_correction":{ConvBnInfoType:[12,0,1,""]},"aimet_common.defs":{ActivationType:[12,0,1,""],CompressionScheme:[5,0,1,""],CostMetric:[5,0,1,""],GreedySelectionParameters:[13,0,1,""],QuantScheme:[18,0,1,""]},"aimet_common.defs.ActivationType":{no_activation:[12,1,1,""],relu6:[12,1,1,""],relu:[12,1,1,""]},"aimet_common.defs.CompressionScheme":{channel_pruning:[5,1,1,""],spatial_svd:[5,1,1,""],weight_svd:[5,1,1,""]},"aimet_common.defs.CostMetric":{mac:[5,1,1,""],memory:[5,1,1,""]},"aimet_common.defs.QuantScheme":{post_training_tf:[18,1,1,""],post_training_tf_enhanced:[18,1,1,""]},"aimet_tensorflow.batch_norm_fold":{fold_all_batch_norms:[7,2,1,""],fold_given_batch_norms:[7,2,1,""]},"aimet_tensorflow.bias_correction":{BiasCorrectionParams:[4,2,1,""],QuantParams:[4,0,1,""]},"aimet_tensorflow.bias_correction.BiasCorrection":{analytical_bias_correction_per_layer:[4,2,1,""],bias_correction_per_layer:[4,2,1,""],correct_bias:[4,2,1,""]},"aimet_tensorflow.compress":{ModelCompressor:[5,0,1,""]},"aimet_tensorflow.compress.ModelCompressor":{compress_model:[5,3,1,""]},"aimet_tensorflow.cross_layer_equalization":{ClsSetInfo:[7,0,1,""],equalize_model:[6,2,1,""]},"aimet_tensorflow.cross_layer_equalization.ClsSetInfo":{ClsSetLayerPairInfo:[7,0,1,""],map_cls_sets_to_new_session:[7,3,1,""]},"aimet_tensorflow.cross_layer_equalization.CrossLayerScaling":{scale_cls_sets:[7,2,1,""],scale_model:[7,2,1,""]},"aimet_tensorflow.cross_layer_equalization.HighBiasFold":{bias_fold:[7,2,1,""]},"aimet_tensorflow.defs":{ChannelPruningParameters:[5,0,1,""],ModuleCompRatioPair:[5,0,1,""],SpatialSvdParameters:[5,0,1,""]},"aimet_tensorflow.defs.ChannelPruningParameters":{AutoModeParams:[5,0,1,""],ManualModeParams:[5,0,1,""],Mode:[5,0,1,""]},"aimet_tensorflow.defs.ChannelPruningParameters.Mode":{auto:[5,1,1,""],manual:[5,1,1,""]},"aimet_tensorflow.defs.SpatialSvdParameters":{AutoModeParams:[5,0,1,""],ManualModeParams:[5,0,1,""],Mode:[5,0,1,""]},"aimet_tensorflow.defs.SpatialSvdParameters.Mode":{auto:[5,1,1,""],manual:[5,1,1,""]},"aimet_tensorflow.plotting_utils":{visualize_relative_weight_ranges_single_layer:[10,2,1,""],visualize_weight_ranges_single_layer:[10,2,1,""]},"aimet_tensorflow.quantsim":{QuantizationSimModel:[9,0,1,""]},"aimet_tensorflow.quantsim.QuantizationSimModel":{"export":[9,3,1,""],compute_encodings:[9,3,1,""]},"aimet_tensorflow.svd":{Svd:[5,0,1,""]},"aimet_tensorflow.svd.Svd":{compress_net:[5,3,1,""]},"aimet_tensorflow.utils.convert_tf_sess_to_keras":{load_keras_model_multi_gpu:[0,2,1,""],load_tf_sess_variables_to_keras_single_gpu:[0,2,1,""],save_as_tf_module_multi_gpu:[0,2,1,""],save_tf_session_single_gpu:[0,2,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","attribute","Python attribute"],"2":["py","function","Python function"],"3":["py","method","Python method"]},objtypes:{"0":"py:class","1":"py:attribute","2":"py:function","3":"py:method"},terms:{"0x7f127685a598":15,"0x7f9dd9bd90d0":15,"0x7fcc438589b0":0,"0x7ff5703eff28":15,"0x7ff577373598":15,"\u210e":[30,33],"\ud835\udc58":[30,33],"\ud835\udc5a":[30,33],"\ud835\udc5b":[30,33],"\ud835\udc64":[30,33],"boolean":7,"case":[2,7,15,23,28,29],"class":[4,5,7,9,12,13,15,18],"default":[4,5,9,13,23,25,29,31,32],"enum":[5,12],"export":[2,9,15,18,24,25,26,29],"final":[5,15,21,22,23,29,31,32],"float":[2,5,13,18,27,29,32],"function":[4,5,6,7,8,9,13,14,15,17,18,23,25,26,29,31,32],"import":[0,4,5,6,7,9,10,12,13,14,15,16,18,19,20,21,29],"int":[2,4,5,9,13,18],"new":[6,7,15],"return":[0,1,4,5,6,7,9,10,13,15,18,23,24],"static":[5,7],"super":15,"true":[2,4,5,7,9,13,14,15,16,18,19,20,26],"try":[5,13,21,23,25],"while":[5,22,23,26,31],And:[7,16,25,27,29],But:25,CLS:[7,16],For:[0,5,13,15,21,22,23,25,29,31,34],NOT:34,Not:23,One:[4,9,22,25,30],Ops:15,That:34,The:[0,1,2,4,5,6,7,9,14,15,16,18,21,22,23,24,25,26,27,28,29,30,31,32,33,34],There:[15,26,28,31,32],These:[0,9,18,21,22,26,27,28,29],Use:[15,26,31],Uses:7,Using:[1,3,9,25,29],Yes:25,__init__:[12,13,15],__iter__:12,_fold_upstream_flag:7,_layer_db:13,_new_sess:4,abil:[8,17,22],abl:[0,15,31,32],about:7,abov:[5,13,18,23,24,25,26,27,28,29,34],abs:28,absolut:[5,13,18],acceler:[5,13,18,25],accept:[5,22,28],access:27,accord:29,accumul:[5,22],accuraci:[1,5,9,13,18,22,23,24,25,27,28,29,32,34],achiev:[5,13,22,23,29,30,33],across:28,act_bw:12,act_softmax:0,action:34,activ:[2,4,7,9,12,15,22],activation_encod:2,actual:[22,27],adam:9,adamoptim:9,add:[9,15,27,29,31,32,34],added:[2,5,15],adding:9,addit:2,address:[26,31,32],adjust:[21,22,28],advic:24,advis:29,affect:[22,34],after:[0,4,6,7,15,16,20,22,25,29,31,32],after_bn_fold_sess:7,after_cls_sess:7,after_fold_sess:7,after_hbf_sess:7,after_relu_replace_sess:7,again:[31,32],aid:29,aimet:[1,2,24,26],aimet_common:[0,5,9,10,12,13,18,19,20,29],aimet_tensorflow:[0,4,5,6,7,9,10],aimet_torch:[12,13,14,15,16,18,19,20,26],algorithm:[4,5,13,22,23,25,34],align_corn:26,all:[2,5,6,7,9,12,13,15,18,21,23,25,27,28],allevi:[22,29],alloc:5,allow:[2,5,8,13,15,17,18,24,25,29,31,32],allow_custom_downsample_op:[5,13],along:[4,7],alreadi:23,also:[2,4,9,18,21,22,23,24,27,31,32,34],alter:27,altern:25,alwai:[5,23],amount:29,analysi:[5,13,25],analyt:[4,12,28,31,32],analytical_bias_correction_per_lay:4,analyz:[5,13,21,22,25,26,29,31,32],andrea:25,andrei:25,andrew:25,ani:[1,5,7,9,15,16,24],annot:27,anoth:[33,34],api:[26,29,31],appear:[5,7,15,16],append:[7,13],appli:[5,6,7,13,15,16,22,23,25,27,28,29,31,32],applic:[0,2,4,5,6,7,10,16,22,23,26],approach:28,appropri:[5,13,22,23,25],approxim:[22,28],apriori:22,architectur:22,argument:[0,5,9],around:26,arxiv:28,as_default:[4,5,6,7,9,10],assess:23,assign:2,assist:[31,32],associ:[4,5,15],assum:2,asymmetr:29,attempt:[21,28],auto:[1,5,6,7,13,14,16,19],auto_param:[5,13,19],automat:[5,7,13,16,22,25],automodeparam:[5,13,19],avail:[6,26,27],avg:5,avoid:[15,18,22,27],awar:27,baalen:28,back:[0,29],backend:[0,4,6,7,10],backprop:29,backward:[2,16,29],balanc:[5,25],bandwidth:22,base:[4,5,21,22],baselin:[23,29],basi:[2,23,25,29],batch:[4,5,7,9,12,16,28],batch_callback:13,batch_norm:7,batch_norm_fold:[4,7,16,20],batch_siz:[0,4,5,12,13,19],batchiter:12,batchnorm2d:15,batchnorm:[6,7,12,14,16,20,28,34],becom:28,been:[15,34],befor:[4,7,16,20,25,29,31,32],begin:[15,29],behavior:24,being:[2,5,15],below:[1,2,4,5,6,7,14,15,28,29,34],benefici:29,benefit:22,best:[22,25,27,29],better:[20,24,27,28],between:[5,7,13,28,29],bia:[6,7,8,14,15,16,17,21,22,27,28,29],bias_correct:[4,12],bias_correct_param:4,bias_correction_after_cl:4,bias_correction_analytical_and_empir:12,bias_correction_empir:[4,12],bias_correction_empirical_analyt:4,bias_correction_param:4,bias_correction_per_lay:4,bias_correction_single_layer_analyt:4,bias_correction_single_layer_empir:4,bias_fold:[7,16],biasadd:9,biascorrect:4,biascorrectionparam:4,biascorrectparam:4,biasutil:4,big:28,bilinear:26,binari:23,bit:[9,27,29],bitwidth:[2,9,29],blankevoort:[25,28],block1_conv1:5,block1_conv2:5,block1_conv2_op:5,block2_conv2:5,block2_conv2_op:5,bn1:[15,16],bn2a_branch2a:7,bn2a_branch2b:7,bn2a_branch2c:7,bn_dict:16,bn_op:7,bn_op_1:7,bn_op_2:7,bn_op_3:7,bn_op_with_meta:7,bns:4,bokeh:10,bokeh_sess:10,bool:[4,5,7,9,13,18],both:[2,22,24,28,30,34],bottleneck:28,british:25,bug:2,bw_output:15,calcul:[5,7,9,23,28,29],call:[5,6,7,13,14,16,24,25,29,30,33],callabl:[5,9],callback:[5,9],can:[0,1,2,4,5,6,7,9,10,13,14,15,16,18,19,20,22,23,24,25,27,28,29,30,31,32,33],candid:[4,5,6,13,23,25],cannot:15,capabl:[31,32],captur:[23,29],carefulli:25,caus:26,ccp:22,center:24,certain:[15,18,25,26],chang:[2,15,25,29,32,34],channel:[2,10,22,23,25,28,30,32,33,34],channel_prun:[5,13],channel_pruning_auto_mod:[5,13],channel_pruning_manual_mod:[5,13],channelpruningparamet:[5,13],channels_last:5,check:[15,18],checkpoint:[5,9],choic:[2,25],choos:[9,21,22,25],chosen:25,circl:27,clamp:29,classif:25,cle:[4,6,22,29],clear_sess:[0,4,6,7,10],client:[0,7],close:[4,6,7,9,10,21,22],cls:[6,7],cls_pair_1:7,cls_pair_2:7,cls_set:7,cls_set_info_list:[7,16],clspairinfo:16,clssetinfo:7,clssetlayerpairinfo:[7,16],codebas:1,collect:21,color:34,column:23,combin:[22,24,25,28],command:[31,32],common:[5,9,18,32],comp:[5,13],comp_ratio:5,comp_ratios_file_path:19,compar:[5,20,29,32],compat:[0,2,4,5,6,7,9,10,15],compil:0,complex:9,compr_model_sess:5,comprehens:6,compress:[0,1,3,11,18,21,24,30,32,33,34],compress_model:[0,5,13,19,31],compress_net:5,compress_schem:[0,5,13,19],compress_sess:0,compressed_model:[5,13],compressed_op:0,compressed_sess:0,compressible_op:0,compression_point:5,compression_visu:19,compressionschem:[0,5,13,19],compressionstat:5,compressor:5,comput:[5,9,13,18,25,26,27,28,31,34],computation:[31,32],compute_encod:[9,18],cond:7,condit:15,confer:[25,28],config:9,config_fil:[9,18],configur:[22,29],connect:[5,21,33],connectedgraph:[6,7,15],consecut:[7,16,27,28],consecutive_layer_list:[7,16],consid:[7,23],consist:[29,34],constant:23,constraint:[2,18],construct:[5,18,26],constructor:[4,5,15],consum:[2,25],contain:[2,5,7,15,29],continu:[15,28],conv1:[0,13,15,16,19],conv1_conv:10,conv1_depthwise_op:7,conv1_op:7,conv1_pointwise_op:7,conv2:[2,13,15,16],conv2d:[0,2,4,5,7,10,15,21,25,34],conv2d_1:[2,5],conv:[0,4,5,7,12,16,30,33,34],conv_bn:16,conv_bn_dict:[4,12],conv_op:[7,10],conv_op_1:7,conv_op_2:7,conv_op_3:7,convbninfotyp:4,converg:29,convers:[15,29],convert:[0,7,27,29,32],convert_tf_sess_to_kera:0,convert_tf_session_to_keras_model:0,convolut:[5,7,22,25],convs_bn_activation_info_dict:4,copi:20,core:23,correct:[7,8,16,17,22,27,28,29],correct_bia:[4,12],corrected_model:4,correspnd:0,correspond:[0,4,7,16,21,23,34],cost:[5,13,23,25],cost_metr:[0,5,13,19],costmetr:[0,5,13,19],could:[9,15,21,34],counter:[9,29],cpu:[5,16,20,27],creat:[0,5,7,9,13,16,18,25,26,27,29],create_cls_set_info_list:7,create_fake_data_load:12,create_stand_alone_supervised_classification_evalu:[19,20],creation:0,cross:[4,8,17,20,22,26,27,28,29,32],cross_layer_equ:[4,6,7,14,16,20,26],cross_layer_equalization_auto:[6,14],cross_layer_equalization_auto_step_by_step:16,cross_layer_equalization_auto_stepwis:7,cross_layer_equalization_depthwise_lay:16,cross_layer_equalization_manu:[7,16],crosslayersc:[4,7,16],cssvd:22,csvd:22,cuda:[12,13,18,19],current:[0,5,7,9,13,15,21,24,25,26,30,33],curv:23,custom:29,data:[5,7,9,12,13,18,19,27,28],data_load:[12,13],data_set:[4,5],dataload:29,dataloadermnist:13,dataset:[0,4,5,28],dataset_s:12,datasetv1:[4,5],datatyp:2,debug:5,decai:25,decid:31,decim:[5,13,19],decis:27,decompos:[25,30,33],decomposit:[5,30,33],deconvolut:26,deep:25,deepcopi:20,deeplabv3:26,def:[0,4,5,6,7,9,10,12,13,14,15,16,18,19,20],default_config:[9,18,29],default_eval_func:[5,9],default_output_bw:[9,18],default_param_bw:[9,18],defin:[0,2,5,13,15,18,26,29],definit:15,degrad:[5,25],degre:[30,33],delta:29,dense_1:9,depend:[5,22,23],depict:2,depth:22,depthwis:16,dequant:29,dequantiz:29,deriv:2,describ:[2,9,18,22,28],descript:26,design:[1,15,24,27,28],desir:[5,9,13,22,25],detail:[5,18,21,22,23,24,25,27,31,32],detect:[6,25],determin:[2,5,6,7,9,13,22,25,27,28,29],devic:[12,16,18,19,20],diagram:[22,23,25,27,29,30,33],dict:[4,5,7,13,15],dictionari:[5,13,19,23,25],did:28,differ:[5,13,21,23,25,28,29],dimens:[25,30,33],directori:[5,13],disabl:[0,23,25],discrep:28,discuss:22,displai:[31,32],display_comp_ratio_plot:[19,31],display_eval_scor:[19,31],distinct:15,distribut:[0,5,13,28,29],divid:29,doc:31,document:[1,22],doe:[5,13,14,15,18,23],done:[21,25,29,34],downsamplelay:5,downstream:[2,7],dramat:1,drop:[5,22,25,28,29],drstical:23,dtype:2,due:[1,8,15,17,27,28],dummy_input:[15,18],dure:[5,7,13,19,25,29,31,32],dynam:[28,32],each:[5,7,10,13,15,16,21,22,23,27,28,29,32,34],easili:[5,13],edit:7,effect:[9,27,29],effort:27,either:[1,4,5,15,24],element:[2,7],els:[15,28],embed:25,empir:[4,12,28],enabl:[1,5,9,24,27],encod:[9,18,27,29],encourag:15,end:[0,15,25],enhanc:[18,29],entir:[4,5,13,18,23,25],enumer:[5,13,18],epoch:[0,5,13,18,22,24,25,29],equal:[4,8,17,20,22,23,26,27,28,29,32],equalize_model:[4,6,14,20,26],equat:29,equival:15,error:[5,9],error_margin:5,especi:29,estim:[27,28],etc:[2,5,22],eval:[5,12,13,14,16,18,19,20,23,25,31],eval_callback:[0,5,13,19],eval_func:5,eval_iter:[0,5,13,18,19],eval_nam:5,eval_scor:[5,13],eval_scores_path:19,evalu:[0,5,6,7,13,18,19,22,23,25,27,31],evaluate_graph:[5,9],evaluate_model:[5,13,18],everi:[9,23,25,29,32],exactli:29,exampl:[15,22,23,27,29,34],example_conv_lay:4,exclud:15,execut:[19,23,31],exist:29,expans:25,expect:[4,5,7,9,15,25,27],experi:[5,13,25],experiment:25,explain:[21,25,28,29,34],explicitli:34,express:[5,13],extract:28,factor:[7,16,22,25,28],fail:[15,26],fake:[0,22],fall:23,fals:[0,2,4,5,12,13,15,18,26],faster:[24,29],fc1000:[4,6,7],fc1:2,fc1_w:9,featur:[2,7,14,15,16,25,28,29,31,32],fed:29,feed_dict:9,few:22,field:2,figur:[23,34],file:[5,9,13,29],filenam:[5,9],filename_prefix:[9,18],fill:7,find:[5,7,9,12,15,16,18,20,23],find_all_conv_bn_with_activ:12,find_all_convs_bn_with_activ:4,find_and_replace_relu6_with_relu:7,fine:[1,5,9,13,18,22,24,27],first:[0,4,5,22,25,27,29,31],fit:[0,5,13,23],fix:[2,15,27,29],flag:[4,7],fold:[6,7,14,16,20,28],fold_all_batch_norm:[4,7,16,20],fold_given_batch_norm:[4,7,16],folded_pair:[7,16],follow:[0,1,2,5,6,7,8,9,13,14,15,16,17,18,19,21,22,23,25,26,27,29,30,32,33,34],footprint:5,form:0,format:[4,5,7,9,12,18],format_info_for_high_bias_fold:7,former:15,forward:[9,15,16,26,29],forward_callback:9,forward_pass_callback:[9,18],forward_pass_callback_arg:[9,18],found:0,four:[0,29],fp32:[28,29],frac:29,framework:[1,7,24,29],free:28,friendli:28,from:[0,1,2,4,5,6,7,9,10,12,13,14,15,16,18,19,20,21,22,23,26,27,28,29,31,32,34],from_tensor_slic:5,full:[15,22,29,33],fulli:[2,5],functional_op:15,funetun:0,further:[1,6,7,21,24,25,27,29],fusedbatchnorm_1:7,gain:[21,25],gener:[1,2,5,9,24,25,27,29],get:[0,4,5,6,7,10,13,20,21,27],get_consecutive_layer_list_from_resnet50_for_sc:7,get_layer_pairs_resnet50_for_fold:7,get_operation_by_nam:[0,4,5,7,10],get_sess:[0,4,6,7,10],get_sess_from_keras_model:0,get_tensor_by_nam:9,github:22,give:[30,33],given:[0,2,4,5,6,7,9,10,13,21,23,24,25,27,28,29,30,31,32,33],global_variables_initi:5,got:7,gpu:[0,4,5,9,13,18,27],granular:[5,13,25,29,32],graph:[0,2,4,5,6,7,9,10,26,31],graph_ev:[5,9],graph_sav:[4,7,9],graph_search:7,graph_util:7,graphsearchutil:[4,7],greater:[5,7,13],greedi:[25,31],greedy_param:[5,13,19],greedy_select_param:5,greedy_selection_comp_ratios_list:19,greedyselectionparamet:[5,13,19],green:[27,34],group:7,guid:[22,27,28],guidebook:24,guidelin:[1,11,22,29],had:15,half:22,happen:14,hardwar:[8,17,20,27,28,29],has:[4,7,13,14,15,16,22,23,25,28,29,31,34],have:[0,2,5,7,14,15,23,25,27,28],hbf:[6,7],heavi:[31,32],height:[30,33,34],help:[6,7,15,20,22,23,25,27,28,29,31,32],helper:[4,9],here:[18,22,24,29,31,32],heurist:5,high:[6,7,14,16,22,23,24,28,32],highbiasfold:[4,7,16],higher:[5,13,18,23,29],highest:23,highlight:[2,28,31,32],histogram:[10,29],hode:12,hold:7,honor:[5,13,18],hook:29,host:[31,32],how:[0,15,24,25,27,28,29,32],howev:[5,13,18,27,28],html:22,http:[22,28,31,32],hxwx5:34,hxwx8:34,hybrid:28,hyper:[27,29],iccv:[25,28],ident:15,identifi:[12,15,34],ieee:[25,28],ignor:[4,5,6,7,13],illustr:[23,30,33],image_bw:15,image_dir:19,image_rgb:15,image_s:[12,19],imagenet:[4,6,7,10],imagenet_dataload:[19,20],imagenetdataload:[19,20],impact:23,implement:26,improv:[1,22,27,29,32],in_activation_typ:12,inc:24,includ:[2,18,22,24],increas:[5,13,20,23,28,29],index:[1,22],indic:[2,4,5,7,22,34],individu:[6,7,14,21,22,23,25],infer:[2,8,9,17,22,28],info:[4,7,12,15,16],inform:[2,5,7,15],init:5,initi:[4,9,29],initialize_model_with_bia:4,initialize_uninitialized_var:9,innov:24,inplac:15,input:[0,5,7,9,10,12,15,21,25,29,30,31,33,34],input_1:[0,4,5,6,7],input_bn:12,input_data:[5,9],input_op_nam:[0,4,5,6,7],input_shap:[0,4,5,6,7,10,12,13,14,16,19],input_tensor:0,insert:[22,29],insight:[31,32],inspect:22,instanc:[0,5,15,31],instanti:[15,31],instead:[15,28],instruct:32,int8:[29,32],integ:[2,9,27],intellig:25,intend:[5,13,18,22],intern:[9,25,28],interpol:23,introduc:[27,29],invalid:5,invok:[0,4,5,6,7,13,25,29,31,32],involv:0,is_first_conv:4,is_relu_activation_in_cls_set:7,is_symmetr:2,isol:0,issu:[15,22,26,27,31,32],iter:[0,4,5,9,13,18,28],iterfirstx:[19,20],its:[10,24,29,34],itself:[25,29,30,33],jaderberg:25,jan:25,jian:25,jianhua:25,join:[5,13],json:[2,9,18,29],just:[29,31,32,34],kaim:25,keep:[22,29],kei:[2,4,7],kera:[1,3,4,5,6,7,10],kernel:[21,30,33],kernel_s:15,known:[15,23],kuzmin:25,label:[9,12,27],larg:[22,29,30,33],larger:[30,33],last:23,latenc:22,layer1:[7,16],layer2:7,layer:[0,5,8,10,12,13,15,17,20,21,22,26,27,28,29,30,31,32,33,34],layer_a:0,layer_list:16,layer_name_to_be_correct:4,layer_pair:7,layer_rank:5,layer_selection_threshold:5,lead:[28,29],learn:[9,25,29],least:21,left:[23,34],length:5,less:[21,23],lesser:[23,25],level:[4,6,22,23,24,31],librari:25,like:[6,14,22,24,25,27,29,31,32],line:10,linear:[4,7,15,16,21],link:1,list:[0,4,5,6,7,9,16,23,26],list_of_module_comp_ratio_pair:[0,5],listen:[31,32],lite:22,load:[0,4,6,7,9,10,13,15,25],load_keras_model_multi_gpu:0,load_model_from_meta:9,load_tf_sess_variables_to_keras_single_gpu:0,loader:12,loading_path:0,local:[31,32],log:15,logger:15,look:[4,24,31,32],lose:34,loss:[24,27,29],lost:[1,24],lot:32,low:[25,28],lower:23,mac:[0,5,13,19,22,25,30,33],machin:25,magnitud:21,mai:[22,25,27,28,29],main:[4,29,32],major:[2,25],make:[0,4,7,15,23,24,25,26,27,29],mani:28,manual:[0,5,13,16,25],manual_param:[0,5,13],manualmodeparam:[0,5,13],map:[2,7,15],map_cls_sets_to_new_sess:7,marku:[25,28],mart:28,match:[5,13,18,21,25,29,34],mathemat:15,matmul:9,matmul_1:5,matmul_8:15,matrix:21,max:[2,25,28,29],mean:21,measur:[5,13],meet:[22,23],memori:[5,13,22,25,30,33,34],messag:5,met:23,meta:[0,5,9],method:[0,5,9,23,25],metric:[0,5,13],might:[2,18,25],min:[2,29],minim:[5,9,25,27],minor:2,mirroredstrategi:0,miss:[2,15],mix:4,mnist:[5,9,13,18],mnist_sav:[5,9],mnist_torch_model:[13,18],mnist_trained_on_gpu:13,mnistpars:5,mobilenet:[0,12,16],mobilenetv2:[12,16],mobilnetv1:0,moblinetv1:0,mode:[0,5,6,13,14,16,19,26],model:[2,3,4,5,6,7,9,10,11,12,13,14,16,18,19,20,21,22,23,28,31,32,34],model_compression_with_visu:19,model_copi:20,model_input:15,model_valid:15,modelcompressor:[0,5,13,19],modelvalid:15,modelwithfunctionallinear:15,modelwithoutfunctionallinear:15,modelwithoutreusednod:15,modelwithreusednod:15,modifi:[7,16,27,34],modul:[0,1,5,13,15,18,34],module_prop_dict:12,modulecompratiopair:[0,5,13],modules_to_ignor:[5,13,19],monoton:[5,13,23],more:[2,5,7,9,13,15,16,21,22,23,25,27,28,29,31,32],mse:0,much:34,multi:[0,7],multipl:[5,7,13,15,19,24,25,27],multipli:[5,22],must:[5,34],nagel:[25,28],name:[0,2,4,5,6,7,9,22,28,31,32],ndarrai:7,nearest:[4,9,12],necessari:[5,13,18,31],need:[0,5,7,16,18,22,25,27,28,31,32],nest:4,net:18,network:[5,9,22,23,25,31,32,33],neural:[22,24,25,29,33],new_sess:6,next:[0,7,16],next_batch:9,no_activ:12,no_evalu:5,no_grad:15,node:[5,9,15],nois:[8,17,22,27,28],nomin:25,none:[0,4,5,7,9,12,13,18,19,31],norm:[7,16,28],normal:29,note:[5,7,13,14,16,18,21,22,23,25,26,27],noth:5,notic:25,now:[15,34],num_batch:18,num_bias_correct_sampl:[4,12],num_comp_ratio_candid:[5,13,19],num_lay:5,num_quant_sampl:[4,12],num_rank:5,num_reconstruction_sampl:[5,13],num_work:19,number:[5,9,10,13,18,23,24,25,27,29,31,32,34],numpi:[0,5],object:[0,5,9,13],observ:[20,23,25,27,28],obtain:[4,7,16,21,22],obvious:[5,13,18],occur:[5,9],occurr:21,oct:25,octob:28,off:[9,28,29],offer:24,offset:[2,29],often:[25,29],onc:[15,21,25],one:[2,4,5,7,9,15,16,21,25,29,30,33],one_hot:9,onli:[4,5,15,16,34],onnx:[2,15,24,26],onnx_file_nam:15,op_typ:29,op_type_map:15,oper:[4,5,7,15,26,27,28],ops:[0,4,6,7,9,22,27],ops_to_ignor:4,optim:[5,9,10,13,19,20,24,25,29,31,32],option:[4,5,9,13,31],orang:34,order:[7,15,16,21,22,27,29,32],org:28,orig_sess:9,origin:[5,9,13,21,22,25,28,31,32],other:[5,7,15,16,18,23,25],otherwis:15,our:23,out:[9,22,25],out_activation_typ:12,output:[0,2,4,5,6,7,8,9,10,12,15,17,21,25,27,28,29,30,33,34],output_bn:12,output_fil:5,output_op_nam:[0,4,5,6,7,9],output_tensor:0,over:[5,13,18,23,25,32],overal:[5,13,22,25],overrid:5,overrul:29,pad:15,page:[18,22],pair:[5,7,12],paper:28,param:[0,4,5,7,9,13,18,19],param_encod:2,paramet:[0,2,6,7,8,9,10,12,15,17,18,19,21,25,26,27,28,29,32],parser:5,part:[25,28],particular:29,pass:[4,5,7,9,13,15,16,24,26,28,29,31],patch:2,path:[0,5,9,13,18],pattern:25,pendyam:25,per:[2,5,7,13,27,28,29],perf:9,perform:[0,4,5,6,9,12,13,14,16,18,20,21,22,23,25,28,29],perform_only_empirical_bias_corr:[4,12],phase:[25,29],pick:[4,5,7,13,22,23,25,27],pickl:[5,13],pictori:34,pictur:[21,24],pink:34,pipelin:27,pitr:25,pkl:19,place:[4,6,7,9],platform:27,pleas:[1,5,13,15,18,21,24,29],plot:[10,32],plotting_util:10,plug:[7,16],point:[25,27,29,32],popul:4,port:[10,31,32],possibl:15,post:[8,17,22,24,25,27,29],post_training_tf:[9,18],post_training_tf_enhanc:[9,18],potenti:[7,26,31,32],practic:[24,25],pre:28,preceding_bn_layer_info:4,preceed:4,preceeding_bn_layer_info:4,precis:[2,22,27],predefin:23,predict:[5,27],prefer:25,prefix:[5,9],preprocess_input:0,presenc:21,present:[1,15,25,28],pretrain:[14,16,19,20],pretti:[5,13],pretty_print:5,prevent:21,previou:[5,13,16,22,23],primit:26,print:[5,9,13,15],prior:21,problem:29,problemat:32,procedur:[23,25],process:[5,9,19,20,22,24,25,28,29],produc:[2,23,31,32],product:24,progress:[31,32],propag:34,prototyp:5,provid:[0,1,5,8,15,17,19,22,23,24,25,27,28,29,31,32,34],prune:[22,23,25,34],pth:[9,13],publish:[10,19],pure:15,pylint:0,python:[0,5,7,9,18],pytorch:[1,24,29],qat:29,qualcomm:[22,24,29],quant:[4,9,18],quant_mod:4,quant_param:4,quant_schem:[9,12],quantisim:9,quantiz:[1,2,3,4,5,9,11,15,24,25,31],quantizaion:28,quantizationsimmodel:[9,18],quantize_model:[9,18],quantized_mnist:18,quantparam:[4,12],quantschem:[9,18],quantsim:[12,18],quantsim_config:[9,18,29],quic:22,quickli:23,rais:[5,9],rand:[0,5,15,18],randn:15,random:[0,5,21],rang:[9,10,20,23,27,28,32],rank:[5,13,30,33],rank_select:13,rank_select_schem:13,rankselectschem:13,rate:[25,29],rather:[31,32],ratio:[5,13,19,21,22,31],reach:22,read_data_set:9,readi:9,readvariableop:[2,9],reason:[15,27],recogn:15,recommend:[5,13,22],reconstruct:5,recov:[24,29],redefin:15,reduc:[21,25,28,34],reduct:22,redund:24,refer:[2,4,12],reference_model:4,regress:21,regular:9,rel:[5,10,13,20,22,27,32],relat:[4,5,6,7,12,13,18],releas:26,relev:27,relu1:15,relu2:15,relu6:[6,7,12,16,28],relu:[2,6,7,12,15,16,28,34],relu_activation_between_lay:7,remain:[12,23,28],remov:[21,24,34],repeat:21,replac:[6,7,16,18,28],replace_modules_of_type1_with_type2:16,repres:[2,4,5,9,13,15,18,23,27,28],represent:2,requir:[0,2,4,5,6,7,9,10,12,13,14,15,16,18,19,20,22,25,28],rerun:15,res2a_branch2a:[4,7],res2a_branch2b:7,res2a_branch2c:7,reset_default_graph:9,reshape_input:9,residu:21,resnet18:[14,16,19,20],resnet18_eval_scor:19,resnet50:[0,4,6,7,10],resnet:22,resolut:29,resolv:15,respect:5,respons:25,rest:0,restor:18,restrict:26,result:[1,5,13,21,22,24,28,29],retrain:[15,22],reus:15,revis:2,revisit:22,rewrit:[15,26],rgb:15,rgb_output:15,right:[27,34],rmsprop:0,round:[4,5,9,13],round_mod:[4,12],rounding_mod:9,rule:[9,29],run:[2,4,5,9,13,15,18,24,25,27,28,29,31],run_graph:5,runtim:[2,5,9,13,18,22,24,25,27,29],runtimeerror:5,sai:25,same:[15,18,28,29,32],sampl:[2,4,5,7,9,21,27,28,29],sandeep:25,satisfactori:22,saurabh:25,save:[0,5,7,9,13,16,18,29],save_and_load_graph:[4,7],save_as_tf_module_multi_gpu:0,save_session_graph_and_vari:0,save_tf_session_single_gpu:0,saved_eval_scores_dict:[5,13,19],saved_model_multi_gpu:0,saved_model_single_gpu:0,saving_path:0,scale:[2,6,7,14,16,28],scale_cls_set:[7,16],scale_factor:7,scale_model:[7,16],scaling_factor_list:[7,16],scatter:10,scenario:[25,27,34],schedul:29,scheme:[0,4,5,9,13,18,23,25,29],scope:0,score:[5,13,19,23,25,31],sdk:[22,24,29],search:[1,23],searcher:25,section:[15,21,25,29],see:[1,5,13,18,21,23,24,25,29,30,31,32,33],seed:13,seen:28,select:[4,22,29,31,34],select_param:13,self:[5,12,13,15],sensit:23,seoul:28,separ:[9,15,16],sequenc:26,serv:[31,32],server:10,sess:[0,4,5,6,7,9,10],sess_after_cl:4,session:[0,4,5,6,7,9,10],set:[2,4,5,7,9,10,13,15,16,22,23,25,26,27,28,29,34],set_learning_phas:0,sever:[15,22],shadow:29,shall:[2,6],shape:[0,5,15],share:15,sharp:25,she:29,shift:[8,17,27,28],should:[2,4,5,9,13,15,22,25,31,34],show:[0,10,15,24,27,28,32],shown:[7,15,25,28],shuffl:[0,13],side:34,sigma:7,signatur:[5,13,18],significantli:28,sim:[9,27],similar:28,simpl:[5,13,18,34],simpli:[9,34],simul:[2,4,8,9,15,17,22,24,27],sinc:[22,23,29],singl:[0,5,13,18,28],singular:[5,30,33],six:29,size:[4,5,9,15,25,26,30,33],skip:[0,6,21],slice:26,slow:25,small:24,smaller:[24,30,33],snippet:2,softmax:[0,4,5,6,7],softwar:[1,24,25],solut:23,some:[5,7,9,13,16,22,23,24,26,27,28,29],someth:[9,25,31,32],sometim:[21,25,28],space:[5,13],spatial:[0,22,23,25],spatial_svd:[0,5,13,19],spatial_svd_auto_mod:[5,13],spatial_svd_auto_mode_with_layerwise_finetun:13,spatial_svd_manual_mod:[5,13],spatialsvdparamet:[0,5,13,19],specif:[4,5,9,10,18,22,25,26,27,28,29],specifi:[2,5,9,13,25,29],speed:[5,13,25,28],sphinx:1,src:[9,18],ssvd:[5,22],stand:[30,33],start:[0,5,6,7,9,10,13,15,23,24,25],start_bokeh_server_sess:[10,19,20],start_op_nam:[4,6,7],starting_op_nam:9,stat:[5,13],state:[0,25],stateless:15,statement:26,statist:[5,10,32],step:[0,7,9,21,22,23,25,27,28,29],stochast:[4,9],store:[4,7,9],str:[0,4,5,6,7,9,15],strategi:0,strict:23,stride:15,strike:25,string:2,structur:[2,4,25],sub:[21,25,34],subclass:0,submodul:15,subsequ:[26,28,29],subset:[4,7,34],subsidiari:24,substanti:2,successfulli:26,suffici:29,suggest:[23,25,28],summari:10,sun:25,supervised_classification_pipelin:[19,20],support:[0,1,5,6,9,12,13,15,21,22,24,25,26,27,28,29,30,33,34],sure:[4,23,26],surround:28,svd:[0,22,23,25],svd_graph:5,svd_type:5,symmetr:29,syntax:2,tabl:[23,26,31],take:[5,24,25,27,28,34],taken:34,tar:5,target:[2,5,9,13,18,22,23,24,25,27,29],target_comp_ratio:[5,13,19],task:[31,32],taxonomi:25,techniqu:[5,6,8,13,17,21,22,24,27,30,33],technolog:24,teh:[5,34],tell:[31,32],temp_cl:7,tempadam:9,tensor:[0,2,4,9,15,21,26,29,30,33],tensor_nam:2,tensorflow:[0,1,22,24,29],term:[25,30,31,32,33],tf_enhanc:[4,9,12],tf_gen:5,tf_names_op_dict:7,tfrecord:5,tfrecord_gener:5,tfrecordgener:5,than:[2,5,7,13,15,31,32],thei:[5,7,16,29,31],them:[4,15,34],therefor:[22,28],thi:[0,1,2,4,5,7,9,13,15,18,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34],those:25,three:[6,22,32],threshold:5,through:[5,28,29,31,32],throughout:32,tijmen:[25,28],time:[2,5,7,13,15,25,26,27,31],to_categor:0,togeth:25,toler:22,tool:[18,22,25,27,28,29,32,34],top:[4,21,31],torch:[13,15,16,18,19,20,26],torchvis:[14,16,19,20],total:23,train:[0,1,5,6,7,8,9,13,17,18,22,24,25,27,29],train_flag:[5,13],train_load:[12,13],train_model:[5,13],train_step:9,trainer:[5,13],trainer_funct:18,training_help:9,trainingextens:[9,18],transact:25,tri:22,tune:[1,5,9,13,18,22,24,27],tupl:[0,5,7,9,15],ture:13,turn:29,tutori:9,tweak:[5,7,13,16],two:[0,4,5,7,13,15,23,24,25,28,29,30,31,32,33],type:[0,5,6,7,9,12,24,31,32],typic:[22,29,31,32],uncompress:22,under:[6,31],understand:[31,32],union:[5,6,7,9],unknown:22,unless:34,unmodifi:23,unnecessari:34,untrain:18,unus:0,updat:[2,4,6,7,28],updated_sess:7,upsampl:26,upsamplelay:5,upstream:[7,21,34],url:[5,10,19,31,32],usabl:2,usag:[2,7,15,18,22,25],use:[0,5,6,7,9,13,15,16,18,25,26,27,28,29,32],use_cuda:[0,4,5,9,13,18],use_monotonic_fit:[5,13],used:[0,2,4,5,6,9,13,14,15,16,18,21,22,23,24,25,26,27,28,29,32],useful:[5,13,27,28],user:[1,4,5,6,7,9,10,13,14,15,16,18,19,22,25,31,32],uses:[2,5,15,27,29,32],using:[0,1,4,5,7,9,13,15,16,18,22,23,24,25,26,27,28,29,31,32],usual:20,util:[4,7,9,10,12,16,19,20],valid:[5,6,7,13,18],validate_example_model:15,validate_for_missing_modul:15,validate_for_reused_modul:15,validate_model:15,valu:[2,5,7,13,23,25,28,29,30,32,33],valueerror:[5,9],van:28,vari:[22,23,28,32],variabl:[0,5,13],varianc:28,variou:[5,22,25,32],vedaldi:25,venic:25,veri:[22,25,32,34],versa:[22,29],version:[24,29],vgg16:[0,5],via:[22,24,29],vice:[22,29],view:[15,24,26,31,32],vision:[25,28],visit:24,visual:[1,3,5,11,22,25,27,28,30,33],visualiz:20,visualiza:10,visualization_url:[5,10,19,20],visualize_changes_after_optim:20,visualize_changes_in_model_after_and_before_cl:20,visualize_model:20,visualize_relative_weight_ranges_model:20,visualize_relative_weight_ranges_single_lay:10,visualize_relative_weight_ranges_to_identify_problematic_lay:20,visualize_serialized_data:19,visualize_weight_rang:20,visualize_weight_ranges_model:20,visualize_weight_ranges_single_lay:10,visualizecompress:[19,31],visualizing_relative_weight_ranges_for_single_lay:10,visualizing_weight_ranges_for_single_lay:10,vol:25,volum:34,wai:[5,13,23],want:[7,9,16,27],warn:15,websocket:[31,32],weight:[0,2,4,6,7,15,20,22,25,27,28,29,32],weight_bw:12,weight_svd:[5,13],weight_svd_auto_mod:[5,13],weight_svd_manual_mod:[5,13],weightsvdparamet:13,well:[5,15,22,25,28,30],were:[7,22,34],what:[22,31,32],when:[2,5,13,14,15,22,24,25,27,28,29,31,32,34],whenev:15,where:[2,5,9,15,23,30,33,34],whether:[5,15],which:[0,4,5,9,13,15,20,22,23,24,25,28,30,31,32,33],whose:[16,28,34],wide:28,width:[29,30,33,34],wise:13,wish:5,within:[0,22],without:[9,27,34],work:[1,9,15,25,26,27,28,29],workaround:26,workflow:[22,24],working_dir:[0,5],would:[6,14,22,25,27,29,31,32],wrap:29,wrapper:[5,13,18],written:26,x_train:0,xent:9,xiangyu:25,y_train:0,yield:12,yihui:25,you:[0,5,13,23,26,30,33],your:[15,26],zero:[4,29],zhang:25,zisserman:25,zou:25},titles:["Using AIMET with Keras Model","Main Page","Encoding Format Specification","AIMET TensorFlow APIs","AIMET TensorFlow Bias Correction API","AIMET TensorFlow Compression API","AIMET TensorFlow Cross Layer Equalization APIs","AIMET TensorFlow Cross Layer Equalization Primitive API","AIMET TensorFlow Quantization APIs","QuantSim API for TensorFlow","AIMET Visualization for Quantization for TensorFlow API","AIMET PyTorch APIs","AIMET PyTorch Bias Correction API","AIMET PyTorch Compression API","AIMET PyTorch Cross Layer Equalization APIs","PyTorch Model Guidelines","AIMET PyTorch Cross Layer Equalization Primitive API","AIMET PyTorch Quantization APIs","AIMET PyTorch Quantization SIM API","AIMET Visualization Compression API","AIMET Visualization for Quantization API","AIMET Channel Pruning","AIMET Features Guidebook","AIMET Greedy Compression Ratio Selection","AI Model Efficiency Toolkit User Guide","AIMET Model Compression","Model Guidelines for PyTorch","AIMET Model Quantization","AIMET Post-Training Quantization Techniques","AIMET Quantization Simulation","AIMET Spatial SVD","AIMET Visualization","AIMET Visualization for Quantization","AIMET Weight SVD","AIMET Winnowing"],titleterms:{"case":[25,27],"enum":18,"function":0,Use:[25,27],Using:0,activationtyp:12,aimet:[0,3,4,5,6,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,27,28,29,30,31,32,33,34],api:[0,1,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,24],awar:29,better:25,bia:[4,12],bokeh:[31,32],channel:[5,13,21],cle:7,clssetinfo:16,code:[0,4,5,6,7,9,10,12,13,14,16,18,19,20],compress:[5,13,19,22,23,25,31],configur:[5,13],convbninfotyp:12,correct:[4,12],cross:[6,7,14,16],custom:7,data:4,datatyp:7,definit:[5,13,16,18],depend:15,design:[31,32],doc:1,document:24,effici:[1,24],encod:2,equal:[6,7,14,16],exampl:[0,2,4,5,6,7,9,10,12,13,14,16,18,19,20,24],explor:23,faq:[25,28],featur:[22,24],file:2,fine:[25,29],flow:[27,28,29],format:2,get:25,greedi:[5,13,23],guid:24,guidebook:22,guidelin:[15,26],happen:29,helper:7,higher:[7,16],hood:29,how:[23,31,34],indic:1,input:4,introduct:[0,5,6,7,13,14,16],kera:0,layer:[4,6,7,14,16,23,25],level:[5,7,9,10,13,16,18,19,20],lower:[7,16],main:1,manual:7,method:7,mode:7,model:[0,1,15,24,25,26,27,29],nois:29,ops:29,option:25,overal:21,overview:[23,24,25,28,29,31,32,34],page:1,param:12,paramet:[4,5,13],per:[4,23,25],perform:7,placement:29,post:28,primit:[6,7,14,16],procedur:21,prune:[5,13,21],pytorch:[2,11,12,13,14,15,16,17,18,26,32],quantiz:[8,10,12,17,18,20,22,27,28,29,32],quantsim:9,rank:25,ratio:[23,25],recommend:29,reconstruct:21,refer:[25,28],result:25,round:25,select:[5,13,21,23,25],server:[31,32],session:[31,32],sim:18,simul:29,spatial:[5,13,30],specif:2,start:[31,32],svd:[5,13,30,33],tabl:1,tar:13,techniqu:[25,28],tensor:10,tensorflow:[2,3,4,5,6,7,8,9,10,32],tool:31,toolkit:[1,24],top:[5,9,10,13,18,19,20],train:28,tune:[25,29],type:4,under:29,usag:24,use:31,used:7,user:[24,27,28,29],util:[0,15],valid:15,version:2,visual:[10,19,20,31,32],weight:[5,10,13,21,33],welcom:1,what:29,winnow:[21,34],work:[23,34]}})